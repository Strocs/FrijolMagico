import { cn } from '@/utils/utils'

export const NewBadget = ({
  color = 'text-fm-orange',
  backgroundColor = 'bg-fm-white',
  outlineColor = 'outline-fm-white',
}) => {
  return (
    <span
      className={cn(
        'absolute -top-2 -left-2 z-20 -rotate-6 rounded-md px-2 font-bold outline-2',
        color,
        backgroundColor,
        outlineColor,
      )}>
      Nuevo!
    </span>
  )
}
