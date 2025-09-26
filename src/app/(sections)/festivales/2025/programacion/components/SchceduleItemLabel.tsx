import { cn } from '@/utils/utils'

interface ScheduleItemLabelProps {
  text: string
}

export const ScheduleItemLabel = ({ text }: ScheduleItemLabelProps) => {
  const labelColor =
    text.toLowerCase().trim() === 'taller' ? 'bg-2025-purple' : 'bg-fm-black'
  return (
    <span
      className={cn(
        'bg-fm-black text-2025-white absolute -top-3 -skew-y-6 px-4 py-2 font-bold capitalize',
        labelColor,
      )}>
      {text}
    </span>
  )
}
