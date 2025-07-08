import { googleSpreadsheetController } from '@/services/googleSpreadsheetController'
import { CatalogArtist } from '@/types/artists'

// Exportar los headers para uso en el servicio
export enum catalogTableHeaders {
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

  return data || []
}

// Re-export mock function for development/testing when Google Sheets isn't available
export { getMockCatalogData } from './mocks/catalog.mock'
