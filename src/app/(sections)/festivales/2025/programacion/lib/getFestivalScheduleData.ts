import { AppSchedule } from '../types/schedule'
import { mapToAppSchedule } from '../utils/scheduleMapper'
import { ScheduleRepository } from '../adapters/ScheduleRepository'
import { ErrorObject } from '@/types/errors'

export async function getFestivalScheduleData(): Promise<{
  data: {
    firstDay: AppSchedule[]
    secondDay: AppSchedule[]
  }
  error: ErrorObject
}> {
  try {
    const [firstDay, secondDay] = await ScheduleRepository()

    const firstDayAppData = firstDay.map((item) => mapToAppSchedule(item))
    const secondDayAppData = secondDay.map((item) => mapToAppSchedule(item))

    return {
      data: {
        firstDay: firstDayAppData,
        secondDay: secondDayAppData,
      },
      error: null,
    }
  } catch (error) {
    const err = error as Error
    console.error(err.message)
    return {
      data: { firstDay: [], secondDay: [] },
      error: {
        message:
          'Error al obtener la programación del festival. Por favor intente nuevamente más tarde.',
      },
    }
  }
}
