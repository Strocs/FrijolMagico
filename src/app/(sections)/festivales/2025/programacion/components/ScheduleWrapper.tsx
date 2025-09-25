'use client'

import { useState } from 'react'
import { AppSchedule } from '../types/schedule'
import { Schedule } from './Schedule'
import { ScheduleNav } from './ScheduleNav'

interface ScheduleWrapperProps {
  firstDay: AppSchedule[]
  secondDay: AppSchedule[]
}

export const ScheduleWrapper = ({
  firstDay,
  secondDay,
}: ScheduleWrapperProps) => {
  const [selectedDay, setSelectedDay] = useState<1 | 2>(1)

  return (
    <section className='mx-auto grid max-w-4xl gap-10 px-4 pt-10 pb-54 md:px-6'>
      <ScheduleNav onSelectDay={setSelectedDay} selectedDay={selectedDay} />
      {selectedDay === 1 ? (
        <Schedule schedule={firstDay} />
      ) : (
        <Schedule schedule={secondDay} />
      )}
    </section>
  )
}
