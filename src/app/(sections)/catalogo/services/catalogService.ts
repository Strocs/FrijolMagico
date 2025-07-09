import { getDataByEnv, DataResult } from '@/services/getDataByEnv'
import { CatalogArtist } from '@/types/artists'
import { getCatalogData, getMockCatalogData } from '../lib/catalog'

export async function getCatalogDataByEnv(): Promise<DataResult<CatalogArtist>> {
  const { data, success } = await getDataByEnv<CatalogArtist>(getCatalogData, getMockCatalogData)

  if (!success) {
    return {
      data: [],
      success,
      error: {
        message: 'Error al obtener los artistas del catálogo. Por favor intente nuevamente más tarde.',
      }
    }
  }
  return { data, success }
}
