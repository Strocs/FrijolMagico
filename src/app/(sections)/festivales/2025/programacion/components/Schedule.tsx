import { cn } from '@/utils/utils'
import { ScheduleItem } from './ScheduleItem'
import { type AppSchedule } from '../types/schedule'

interface ScheduleProps {
  schedule: Array<AppSchedule>
}

export const Schedule = ({ schedule }: ScheduleProps) => {
  const getTimeList = (day: AppSchedule[]) => {
    const times = day.map((item) => item.startingTime)
    return Array.from(new Set(times))
  }

  const getEventByTime = (time: string, events: AppSchedule[]) => {
    return events.filter((event) => event.startingTime === time)
  }

  const timeList = getTimeList(schedule)

  return timeList.map((time, index) => {
    const eventsbyTime = getEventByTime(time, schedule)

    return (
      <div key={time + index} className='space-y-10'>
        <hr className={cn(['text-2025-white border-2 border-dashed'])} />
        <section className='flex h-fit gap-2 md:gap-10'>
          <h3
            className={cn([
              'font-superfortress text-2025-white -scale-100 text-center text-2xl leading-[1.5rem] font-bold tracking-wider [writing-mode:vertical-lr] md:text-4xl',
            ])}>
            {time}
          </h3>
          <ul className='flex w-full flex-wrap gap-x-6 gap-y-10'>
            {eventsbyTime.map((event) => (
              <ScheduleItem key={event.title} {...event} />
            ))}
          </ul>
        </section>
      </div>
    )
  })
}
