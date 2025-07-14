import { type DataResult, getDataByEnv } from '@/services/getDataByEnv'
import type { CatalogArtist } from '@/types/artists'
import { getMockCatalogData } from './mocks/getCatalogData.mock'

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
}

export async function getCatalogData(): Promise<DataResult<CatalogArtist>> {
  try {
    const catalogId = process.env.CATALOG_SHEET_ID

    const { data, success } = await getDataByEnv<CatalogArtist>({
      mockFn: getMockCatalogData,
      sheetId: catalogId,
      headers: catalogTableHeaders,
    })

    if (!success || !data) {
      throw new Error('Data not found or an error occurred while fetching catalog artists.')
    }

    return {
      data,
      success,
    }
  } catch (error) {
    const err = error as Error
    console.error(err.message)
    return {
      data: [],
      success: false,
      error: {
        message: 'Error al obtener los artistas del catálogo. Por favor intente nuevamente más tarde.',
      },
    }
  }
}