import { Schedule } from './components/Schedule'
import { getFestivalScheduleData } from './lib/getFestivalScheduleData'

const {
  data: { firstDay, secondDay },
  error,
} = await getFestivalScheduleData()

export default function ProgramacionPage() {
  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <Schedule schedule={firstDay} />
    </div>
  )
}
