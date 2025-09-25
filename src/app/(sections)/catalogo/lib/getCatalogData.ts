import type { CatalogArtist, RawCatalogArtist } from '../types/catalog'
import { formatUrlWithoutQuery } from '@/utils/utils'
import { catalogRepository } from '../adapters/catalogRepository'
import { ErrorObject } from '@/types/errors'

export async function getCatalogData(): Promise<{
  data: CatalogArtist[]
  error: ErrorObject
}> {
  try {
    const data = await catalogRepository()

    const catalogData = addCollectiveRelationship(data)

    return {
      data: formatArtistData(catalogData),
      error: null,
    }
  } catch (error) {
    const err = error as Error
    console.error(err.message)
    return {
      data: [],
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
    if (!artist.collective) return { ...artists, collective: null }

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
  }) as CatalogArtist[]
}

export const formatArtistData = (
  artistsData: CatalogArtist[],
): CatalogArtist[] => {
  return artistsData.map((artist) => {
    const rrssUrl = formatUrlWithoutQuery(artist.rrss)

    let formattedBio = artist.bio
      .replaceAll(/"([^"]+?)"/g, '"_$1_"')
      .replaceAll(/'([^']+?)'/g, "'_$1_'")
      .split('\n')
      .join('  \n')

    const usernameRegex = /\s@(\w+)/g
    if (usernameRegex.test(formattedBio) && rrssUrl) {
      formattedBio = formattedBio.replace(usernameRegex, (_, username) => {
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
