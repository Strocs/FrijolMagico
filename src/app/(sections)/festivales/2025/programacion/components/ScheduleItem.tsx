import { cn } from '@/utils/utils'
import { type ScheduleItem as ScheduleItemProps } from '../types/schedule'
import { ScheduleItemLabel } from './SchceduleItemLabel'
import { ScheduleItemButton } from './ScheduleItemButton'

export const ScheduleItem = ({
  title,
  startingTime,
  duration,
  activityType,
  inscriptionUrl,
  emissor,
}: ScheduleItemProps) => {
  return (
    <li
      className={cn([
        'hover:text-secondary group relative grid h-fit min-h-44 w-full max-w-[340px] gap-2 px-4 pt-8 leading-4 text-black shadow-xl duration-300',
        "before:bg-secondary before:absolute before:-z-20 before:h-full before:w-full before:content-['']",
        "group after:absolute after:bottom-0 after:-z-10 after:h-7 after:w-full after:duration-300 after:content-[''] hover:after:h-full",
      ])}>
      <ScheduleItemLabel>{activityType}</ScheduleItemLabel>
      <header>
        <h2 className='group-hover:text-secondary font-bold tracking-wide text-black uppercase duration-300'>
          {title}
        </h2>
        <span className='text-sm leading-3 font-light'>{emissor}</span>
      </header>
      <section className='flex items-end justify-between gap-4 self-end'>
        <div>{startingTime}</div>
      </section>
      <footer className='flex h-fit w-full items-center justify-center gap-2 self-end text-center text-white'>
        <ScheduleItemButton
          as='a'
          className='hover:text-accent-yellow w-full py-1.5 whitespace-nowrap transition duration-300'>
          Más info
        </ScheduleItemButton>
        {!!inscriptionUrl ? (
          <>
            <hr className='border-secondary w-4 rotate-90 border-1' />
            <a
              className='hover:text-accent-yellow block w-full py-1.5 transition duration-300'
              href={inscriptionUrl}>
              Inscríbete aquí
            </a>
          </>
        ) : (
          <>
            <hr className='border-secondary w-4 rotate-90 border-1' />
            <p className='w-full whitespace-nowrap'>Entrada liberada</p>
          </>
        )}
      </footer>
    </li>
  )
}
