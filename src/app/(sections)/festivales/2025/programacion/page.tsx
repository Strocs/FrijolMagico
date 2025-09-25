import { unstable_ViewTransition as ViewTransition } from 'react'
import { getFestivalScheduleData } from './lib/getFestivalScheduleData'
import { FestivalHeader } from '../components/FestivalHeader'
import { ScheduleWrapper } from './components/ScheduleWrapper'
import { SectionHomeButton } from '@/components/SectionsHomeButton'

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
      <ViewTransition name='transition-logo'>
        <SectionHomeButton />
      </ViewTransition>
      <ScheduleWrapper firstDay={firstDay} secondDay={secondDay} />
    </>
  )
}
