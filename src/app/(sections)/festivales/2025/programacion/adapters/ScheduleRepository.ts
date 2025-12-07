import { SCHEDULE_CONFIG } from '../constants/scheduleConfig'
import { getDataFromCMS } from '@/infra/getDataFromCMS'
import { RawSchedule } from '../types/schedule'
import { getDataFromMock } from './mocks/scheduleData.mock'

export async function ScheduleRepository(): Promise<RawSchedule[][]> {
  if (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === 'development') {
    return getDataFromMock()
  }

  const data = await getDataFromCMS<RawSchedule>(SCHEDULE_CONFIG)

  if (!data) {
    throw new Error(
      'Data not found or an error occurred while fetching festival schedule.',
    )
  }

  return data as RawSchedule[][]
}
