import { type DataResult, getDataByEnv } from '@/services/getDataByEnv'
import type { CatalogArtist, RawCatalogArtist } from '@/types/artists'
import { getMockCatalogData } from './mocks/getCatalogData.mock'
import { formatUrlWithoutQuery } from '@/lib/utils'

// Exportar los headers para uso en el servicio
export enum catalogTableHeaders {
  id = 'id',
  name = 'name',
  work_area = 'work_area',
  rrss = 'rrss',
  avatar = 'avatar',
  bio = 'bio',
  email = 'email',
  city = 'city',
  collective = 'collective',
}

export async function getCatalogData(): Promise<DataResult<CatalogArtist>> {
  try {
    const catalogId = process.env.CATALOG_SHEET_ID

    const { data, success } = await getDataByEnv<RawCatalogArtist>({
      mockFn: getMockCatalogData,
      sheetId: catalogId,
      headers: catalogTableHeaders,
    })

    if (!success || !data) {
      throw new Error(
        'Data not found or an error occurred while fetching catalog artists.',
      )
    }

    const catalogData = addCollectiveRelationship(data)

    return {
      data: formatArtistData(catalogData),
      success,
    }
  } catch (error) {
    const err = error as Error
    console.error(err.message)
    return {
      data: [],
      success: false,
      error: {
        message:
          'Error al obtener los artistas del catálogo. Por favor intente nuevamente más tarde.',
      },
    }
  }
}

export const addCollectiveRelationship = (
  artists: RawCatalogArtist[],
): CatalogArtist[] => {
  return artists.map((artist) => {
    if (!artist.collective) return { ...artist, collective: null }

    const collectiveMembers = artists.filter((member) => {
      return member.collective === artist.collective && member.id !== artist.id
    })

    return {
      ...artist,
      collective: {
        name: artist.collective,
        members: collectiveMembers.map((member) => ({
          id: member.id,
          name: member.name,
        })),
      },
    }
  })
}

export const formatArtistData = (
  artistsData: CatalogArtist[],
): CatalogArtist[] => {
  return artistsData.map((artist) => {
    const rrssUrl = formatUrlWithoutQuery(artist.rrss)

    let formattedBio = artist.bio
      .replace(/"([^"]+?)"/g, '_$1_')
      .split('\n')
      .join('  \n')

    const usernameRegex = /\s@(\w+)/g
    if (usernameRegex.test(formattedBio) && rrssUrl) {
      formattedBio = formattedBio.replace(usernameRegex, (match, username) => {
        return ` **[@${username}](${rrssUrl})**`
      })
    }

    return {
      ...artist,
      bio: formattedBio,
      rrss: rrssUrl,
    }
  })
}
