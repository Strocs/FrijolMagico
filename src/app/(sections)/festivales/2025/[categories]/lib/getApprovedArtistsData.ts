import { DataResult, getDataByEnv } from '@/services/getDataByEnv'
import { ApprovedArtist } from '@/types/artists'
import { getMockApprovedArtistsData } from './mocks/getApprovedArtistsData.mock'

// Exportar los headers para uso en el servicio
export enum approvedArtistsTableHeaders {
  id = 'id',
  name = 'name',
  work_area = 'work_area',
  rrss = 'rrss',
}

// Initialize the Google Spreadsheet
export async function getApprovedArtistsData(): Promise<DataResult<ApprovedArtist>> {
  try {
    const approvedArtistId = process.env.APPROVED_ARTISTS_SHEET_ID

    const { data, success } = await getDataByEnv<ApprovedArtist>({
      mockFn: getMockApprovedArtistsData,
      sheetId: approvedArtistId,
      headers: approvedArtistsTableHeaders,
    })

    if (!success || !data) {
      throw new Error('Data not found or an error occurred while fetching approved artists.')
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
        message: 'Error al obtener los artistas aprobados. Por favor intente nuevamente más tarde.',
      },
    }
  }
}