interface ScheduleItemLabelProps {
  children: React.ReactNode
}

export const ScheduleItemLabel = ({ children }: ScheduleItemLabelProps) => {
  return (
    <span className='absolute -top-3 -skew-y-6 bg-black px-4 py-2 font-bold text-white uppercase'>
      {children}
    </span>
  )
}
