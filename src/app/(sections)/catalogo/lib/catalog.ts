import { googleSpreadsheetController } from '@/lib/googleSpreadsheetController'
import { CatalogArtist } from '@/types/artists'

enum catalogTableHeaders {
  ID = 'id',
  NAME = 'name',
  WORK_AREA = 'work_area',
  RRSS = 'rrss',
  AVATAR = 'avatar',
  BIO = 'bio',
  EMAIL = 'email',
  CITY = 'city',
}

// Initialize the Google Spreadsheet
export async function getCatalogData(): Promise<CatalogArtist[]> {
  const data = await googleSpreadsheetController<CatalogArtist>({
    sheetId: process.env.CATALOG_SHEET_ID,
    apiKey: process.env.GOOGLE_API_KEY,
    headers: catalogTableHeaders,
  })

  if (!data) {
    return []
  }

  return data
}

// Re-export mock function for development/testing when Google Sheets isn't available
export { getMockCatalogData } from './mocks/catalog.mock'
