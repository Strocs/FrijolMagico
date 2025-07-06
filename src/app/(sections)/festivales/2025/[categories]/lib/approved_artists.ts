import { ApprovedArtist } from '@/types/artists'
import { googleSpreadsheetController } from '../../../../../../lib/googleSpreadsheetController'

export enum approvedArtistsTableHeaders {
  ID = 'id',
  NAME = 'name',
  WORK_AREA = 'work_area',
  RRSS = 'rrss',
}

// Initialize the Google Spreadsheet
export async function getApprovedArtistsData(): Promise<ApprovedArtist[]> {
  const data = await googleSpreadsheetController<ApprovedArtist>({
    sheetId: process.env.APPROVED_ARTISTS_SHEET_ID,
    apiKey: process.env.GOOGLE_API_KEY,
    headers: approvedArtistsTableHeaders,
  })

  if (!data) {
    return []
  }

  return data
}

// Re-export mock function for development/testing when Google Sheets isn't available
export { getMockApprovedArtistsData } from './mocks/approved_artists.mock'
