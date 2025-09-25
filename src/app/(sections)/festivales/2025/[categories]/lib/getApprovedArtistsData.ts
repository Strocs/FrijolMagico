import { ApprovedArtist } from '../types'
import { approvedArtistsRepository } from '../adapters/approvedArtistsRepository'
import { ErrorObject } from '@/types/errors'

// Initialize the Google Spreadsheet
export async function getApprovedArtistsData(): Promise<{
  data: ApprovedArtist[]
  error: ErrorObject
}> {
  try {
    const data = await approvedArtistsRepository()

    return {
      data,
      error: null,
    }
  } catch (error) {
    const err = error as Error
    console.error(err.message)
    return {
      data: [],
      error: {
        message:
          'Error al obtener los artistas aprobados. Por favor intente nuevamente más tarde.',
      },
    }
  }
}
