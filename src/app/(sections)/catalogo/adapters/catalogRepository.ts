import { getDataFromCMS } from '@/lib/getDataFromCMS'
import { RawCatalogArtist } from '../types/catalog'
import { getDataFromCatalogMock } from './mocks/catalogData.mock'
import { CATALOG_CONFIG } from '../constants/catalogConfig'

export async function catalogRepository(): Promise<RawCatalogArtist[]> {
  if (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === 'development') {
    return getDataFromCatalogMock()
  }

  const data = await getDataFromCMS<RawCatalogArtist>(CATALOG_CONFIG)

  if (!data) {
    throw new Error(
      'Data not found or an error occurred while fetching catalog info.',
    )
  }

  return data as RawCatalogArtist[]
}
