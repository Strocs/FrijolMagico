import { cn } from '@/utils/utils'
import { type AppSchedule as ScheduleItemProps } from '../types/schedule'
import { ScheduleItemLabel } from './SchceduleItemLabel'
import { ScheduleSpeakerName } from './ScheduleSpeakerName'

export const ScheduleItem = ({
  title,
  startingTime,
  description,
  duration,
  activityType,
  infoLink,
  speaker,
  speakerSocialLink,
  inscriptionLink,
}: ScheduleItemProps) => {
  return (
    <li
      className={cn([
        'hover:text-2025-white text-fm-black before:bg-2025-white after:bg-fm-black',
        'group relative grid h-fit min-h-44 w-full max-w-[340px] gap-4 px-4 pt-8 leading-4 shadow-lg duration-300',
        "before:absolute before:-z-20 before:h-full before:w-full before:rounded-xl before:content-['']",
        "after:absolute after:bottom-0 after:-z-10 after:h-7 after:w-full after:rounded-b-xl after:duration-300 after:content-[''] hover:after:h-full hover:after:rounded-t-xl",
      ])}>
      <ScheduleItemLabel text={activityType} />
      <header>
        <h2 className='group-hover:text-2025-yellow text-fm-black font-bold tracking-wide uppercase duration-300'>
          {title}
        </h2>
        <ScheduleSpeakerName
          speaker={speaker}
          speakerSocialLink={speakerSocialLink}
        />
      </header>
      <section className='grid gap-4'>
        <div className='flex items-end justify-between gap-4 self-end'>
          <p>{startingTime}</p>
          {duration > 0 && <p>Duración: {duration} min</p>}
        </div>
        <p className='text-sm leading-5'>{description}</p>
      </section>
      <footer className='text-fm-white flex h-fit min-h-8 w-full items-center justify-center gap-2 self-end text-center'>
        {!!infoLink && (
          <>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={infoLink}
              className='hover:text-2025-yellow w-full py-1.5 whitespace-nowrap transition duration-300'>
              Más info
            </a>
            <hr className='border-2025-white w-4 rotate-90 border-1' />
          </>
        )}
        {!!inscriptionLink && (
          <a
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-2025-yellow w-full py-1.5 whitespace-nowrap transition duration-300'
            href={inscriptionLink}>
            Inscríbete aquí
          </a>
        )}
      </footer>
    </li>
  )
}
