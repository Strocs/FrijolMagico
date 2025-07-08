import { getDataByEnv, DataResult } from '@/services/getDataByEnv'
import { CatalogArtist } from '@/types/artists'
import { getCatalogData, getMockCatalogData } from '../lib/catalog'

export async function getCatalogDataByEnv(): Promise<DataResult<CatalogArtist>> {
  return getDataByEnv<CatalogArtist>(getCatalogData, getMockCatalogData)
}
