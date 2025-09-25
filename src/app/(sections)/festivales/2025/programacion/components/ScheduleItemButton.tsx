import { cn } from '@/utils/utils'

interface ScheduleItemButtonProps {
  as: 'a' | 'button'
  className: string
  children: React.ReactNode
}
export const ScheduleItemButton = ({
  as,
  className,
  children,
}: ScheduleItemButtonProps) => {
  const Element = as === 'a' ? 'a' : 'button'

  return (
    <Element
      className={cn(
        'hover:text-accent-yellow w-full py-1.5 whitespace-nowrap transition duration-300',
        className,
      )}>
      {children}
    </Element>
  )
}
