import { getDataByEnv, DataResult } from '@/services/getDataByEnv'
import { ApprovedArtist } from '@/types/artists'
import { getApprovedArtistsData, getMockApprovedArtistsData } from '../lib/approved_artists'

export async function getApprovedArtistsDataByEnv(): Promise<DataResult<ApprovedArtist>> {
  return await getDataByEnv<ApprovedArtist>(getApprovedArtistsData, getMockApprovedArtistsData)
}
