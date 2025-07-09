import { getDataByEnv, DataResult } from '@/services/getDataByEnv'
import { ApprovedArtist } from '@/types/artists'
import { getApprovedArtistsData, getMockApprovedArtistsData } from '../lib/approved_artists'

export async function getApprovedArtistsDataByEnv(): Promise<DataResult<ApprovedArtist>> {
  const { data, success } = await getDataByEnv<ApprovedArtist>(getApprovedArtistsData, getMockApprovedArtistsData)

  if (!success) {
    return {
      data: [],
      success,
      error: {
        message: 'Error al obtener a los selccionados para el festival. Por favor intente nuevamente más tarde.',
      }
    }
  }

  return { data, success }
}
