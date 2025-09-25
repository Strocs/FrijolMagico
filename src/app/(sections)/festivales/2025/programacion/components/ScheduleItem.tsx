import { cn } from '@/utils/utils'
import { type AppSchedule as ScheduleItemProps } from '../types/schedule'
import { ScheduleItemLabel } from './SchceduleItemLabel'
import { ScheduleItemButton } from './ScheduleItemButton'
import { Instagram } from '@/components/icons/Instagram'

export const ScheduleItem = ({
  title,
  startingTime,
  duration,
  activityType,
  infoLink,
  speaker,
  speakerSocialLink,
}: ScheduleItemProps) => {
  return (
    <li
      className={cn([
        'hover:text-2025-orange text-fm-black before:bg-2025-white',
        'group relative grid h-fit min-h-44 w-full max-w-[340px] gap-2 px-4 pt-8 leading-4 shadow-lg duration-300',
        "before:absolute before:-z-20 before:h-full before:w-full before:content-['']",
        "after:absolute after:bottom-0 after:-z-10 after:h-7 after:w-full after:duration-300 after:content-[''] hover:after:h-full",
      ])}>
      <ScheduleItemLabel>{activityType}</ScheduleItemLabel>
      <header>
        <h2 className='group-hover:text-2025-orange text-fm-black font-bold tracking-wide uppercase duration-300'>
          {title}
        </h2>
        <p className='text-sm leading-3 font-light'>
          {speaker}{' '}
          <a aria-label='Redes sociales del encargado' href={speakerSocialLink}>
            <Instagram size={10} />
          </a>
        </p>
      </header>
      <section className='flex items-end justify-between gap-4 self-end'>
        <div>{startingTime}</div>
      </section>
      <footer className='text-fm-white flex h-fit w-full items-center justify-center gap-2 self-end text-center'>
        <ScheduleItemButton
          as='a'
          className='hover:text-2025-yellow w-full py-1.5 whitespace-nowrap transition duration-300'>
          Más info
        </ScheduleItemButton>
        {!!infoLink ? (
          <>
            <hr className='border-secondary w-4 rotate-90 border-1' />
            <a
              className='hover:text-accent-yellow block w-full py-1.5 transition duration-300'
              href={infoLink}>
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
