import { googleSpreadsheetController } from '@/services/googleSpreadsheetController'
import { ApprovedArtist } from '@/types/artists'

// Exportar los headers para uso en el servicio
export enum approvedArtistsTableHeaders {
  id = 'id',
  name = 'name',
  work_area = 'work_area',
  rrss = 'rrss',
}

// Initialize the Google Spreadsheet
export async function getApprovedArtistsData(): Promise<ApprovedArtist[]> {
  try {
    if (!process.env.APPROVED_ARTISTS_SHEET_ID || !process.env.GOOGLE_API_KEY) {
      throw new Error('Falta configuración de Google Sheets: APPROVED_ARTISTS_SHEET_ID o GOOGLE_API_KEY.')
    }

    const data = await googleSpreadsheetController<ApprovedArtist>({
      sheetId: process.env.APPROVED_ARTISTS_SHEET_ID,
      apiKey: process.env.GOOGLE_API_KEY,
      headers: approvedArtistsTableHeaders,
    })

    return data
  } catch (error) {
    const err = error as Error
    console.error(err.message)
    return Promise.reject({
      message: 'Error al obtener los artistas aprobados.',
    })
  }
}

// Re-export mock function for development/testing when Google Sheets isn't available
export { getMockApprovedArtistsData } from './mocks/approved_artists.mock'
