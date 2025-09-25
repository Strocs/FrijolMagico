import { Schedule } from './components/Schedule'
import { getFestivalScheduleData } from './lib/getFestivalScheduleData'
import { FestivalHeader } from '../components/FestivalHeader'
import { ScheduleWrapper } from './components/ScheduleWrapper'

const {
  data: { firstDay, secondDay },
  error,
} = await getFestivalScheduleData()

export default function ProgramacionPage() {
  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <>
      <FestivalHeader
        title={'# Programación'}
        subTitle={'## Festival Frijol Mágico 2025'}
        description='Revisa la programación completa del Festival Frijol Mágico 2025 y no te pierdas ningún detalle.'
      />
      <ScheduleWrapper firstDay={firstDay} secondDay={secondDay} />
    </>
  )
}
