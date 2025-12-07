import { getDataFromCMS } from '@/infra/getDataFromCMS'
import { getDataFromMock } from './mocks/approvedArtistsData.mock'
import { APPROVED_ARTISTS_CONFIG } from '../constants/approvedArtistsConfig'
import { ApprovedArtist } from '../types'

export async function approvedArtistsRepository(): Promise<ApprovedArtist[]> {
  if (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === 'development') {
    return getDataFromMock()
  }
  const data = await getDataFromCMS<ApprovedArtist>(APPROVED_ARTISTS_CONFIG)

  if (!data) {
    throw new Error(
      'Data not found or an error ocurred while fetching approved artists',
    )
  }

  return data as ApprovedArtist[]
}
