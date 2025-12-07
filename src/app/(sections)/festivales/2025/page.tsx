import { ViewTransition } from 'react'
import { Grid } from '@/components/Grid'
import { FestivalHeader } from './components/FestivalHeader'
import { GridItem } from '@/components/GridItem'
import { FestivalCard } from './components/FestivalCard'
import { paths } from '@/config/paths'
import { SectionHomeButton } from '@/components/SectionsHomeButton'

export default function Festival2025Page() {
  return (
    <>
      <FestivalHeader
        title='# Festival Frijol Mágico 2025'
        subTitle='## Casa Editorial Universidad de La Serena'
        description=''
      />
      <ViewTransition name='transition-logo'>
        <SectionHomeButton />
      </ViewTransition>
      <main className='mx-auto h-full max-w-3xl px-4 pt-10 pb-20'>
        <Grid
          className='h-[800px] gap-4 md:h-[500px]'
          row={{ base: 8, md: 4 }}
          col={{ base: 1, md: 2 }}>
          <GridItem row={{ base: 4, md: 4 }} col={{ base: 1 }}>
            <FestivalCard
              text='Seleccionados'
              href={paths.festival[2025].ilustracion}
            />
          </GridItem>

          <GridItem row={{ base: 4, md: 4 }} col={{ base: 1 }}>
            <FestivalCard
              text='Programación'
              href={paths.festival[2025].schedule}
            />
          </GridItem>
        </Grid>
      </main>
    </>
  )
}
