import { cn } from '@/utils/utils'
import { ScheduleItem } from './ScheduleItem'
import { type ScheduleItem as ScheduleItemProps } from '../types/schedule'

interface ScheduleProps {
  schedule: Array<ScheduleItemProps>
}

export const Schedule = ({ schedule }: ScheduleProps) => {
  // get time list.
  //
  const time = [
    '10:00',
    '12:00',
    '14:00',
    '16:00',
    '18:00',
    '20:00',
    '22:00',
    '24:00',
  ]

  return (
    <div className='space-y-10'>
      <hr className={cn(['border-2 border-dashed'])} />
      <section className='flex h-fit gap-2 md:gap-10'>
        <h3
          className={cn([
            'font-fira -scale-100 text-end text-2xl leading-[1.5rem] font-black tracking-wider [writing-mode:vertical-lr] md:text-4xl',
          ])}>
          {time[0]}
        </h3>
        <ul className='flex w-full flex-wrap gap-x-6 gap-y-10'>
          {schedule.map((activity) => (
            <ScheduleItem key={activity.title} {...activity} />
          ))}
        </ul>
      </section>
    </div>
  )
}
