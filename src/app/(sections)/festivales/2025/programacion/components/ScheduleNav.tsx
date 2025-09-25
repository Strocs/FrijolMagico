import { cn } from '@/utils/utils'

interface ScheduleNavProps {
  onSelectDay: (day: 1 | 2) => void
  selectedDay: 1 | 2
}
export const ScheduleNav = ({ onSelectDay, selectedDay }: ScheduleNavProps) => {
  return (
    <nav className='sticky top-8 z-50 flex flex-wrap items-center justify-center gap-2 md:gap-8'>
      <button
        className={cn(
          'font-superfortress bg-2025-white text-2025-orange outline-2025-orange cursor-pointer rounded-lg px-4 py-1 leading-none font-light outline transition duration-300 outline-dashed md:px-6 md:text-xl md:hover:scale-105',
          {
            'bg-2025-orange text-fm-white outline-none md:scale-110':
              selectedDay === 1,
          },
        )}
        onClick={() => onSelectDay(1)}>
        Viernes 3
      </button>
      <button
        className={cn(
          'font-superfortress bg-2025-white text-2025-orange outline-2025-orange cursor-pointer rounded-lg px-4 py-1 leading-none font-light outline transition duration-300 outline-dashed md:px-6 md:text-xl md:hover:scale-105',
          {
            'bg-2025-orange text-fm-white outline-none md:scale-110':
              selectedDay === 2,
          },
        )}
        onClick={() => onSelectDay(2)}>
        Sábado 4
      </button>
    </nav>
  )
}
