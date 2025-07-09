import { googleSpreadsheetController } from '@/services/googleSpreadsheetController'
import { CatalogArtist } from '@/types/artists'

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
