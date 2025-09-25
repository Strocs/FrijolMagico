interface ScheduleItemLabelProps {
  children: React.ReactNode
}

export const ScheduleItemLabel = ({ children }: ScheduleItemLabelProps) => {
  return (
    <span className='bg-fm-black text-2025-white absolute -top-3 -skew-y-6 px-4 py-2 font-bold capitalize'>
      {children}
    </span>
  )
}
