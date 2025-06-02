import Link from 'next/link'
import Image from 'next/image'
import DoodleLine from './DoodleLine'
import { Grid } from '@/components/Grid'
import { GridItem } from '@/components/GridItem'
import { SpotifyCard } from './home/SpotifyCard'
import { RRSSCard } from './home/RRSSCard'
import { BackToTop } from './BackToTop'

export const Footer = () => {
  return (
    <footer className='mx-auto w-full max-w-3xl px-4 lg:pb-10'>
      <BackToTop />
      <DoodleLine />
      <Grid
        row={{ base: 7, sm: 4, lg: 4 }}
        col={{ base: 1, sm: 6, lg: 8 }}
        className='gap-4 pt-4'>
        <GridItem
          row={{ base: 2, sm: 2, lg: 2 }}
          col={{ base: 1, sm: 4, lg: 6 }}>
          <Link
            href={'/'}
            className='bg-fm-dark group relative grid size-full place-items-center overflow-hidden rounded-2xl py-4 text-center'>
            <Image
              src='/enredadera.png'
              alt='Frijol Mágico'
              width={600}
              height={600}
              className='absolute -bottom-16 sm:-bottom-40'
            />
            <p className='text-fm-yellow z-10 text-2xl font-black duration-300 group-hover:scale-110'>
              <span className='text-fm-white font-bold'>Volver al </span>
              Inicio
            </p>
          </Link>
        </GridItem>

        <GridItem
          row={{ base: 2, sm: 2, lg: 3 }}
          col={{ base: 1, sm: 2, lg: 2 }}>
          <SpotifyCard orientation='vertical' />
        </GridItem>

        <GridItem col={{ base: 1, sm: 3, lg: 6 }} row={{ base: 1 }}>
          <RRSSCard orientation='horizontal' />
        </GridItem>

        <GridItem col={{ base: 1, sm: 3, lg: 4 }} row={{ base: 1 }}>
          <p className='bg-fm-green text-fm-white font-josefin grid size-full place-items-center rounded-2xl text-lg'>
            Frijol Mágico {new Date().getFullYear()} 🌱
          </p>
        </GridItem>

        <GridItem col={{ base: 1, sm: 6, lg: 4 }} row={{ base: 1 }}>
          <Link
            href='https://strocs.dev'
            className='text-fm-orange hover:text-fm-yellow grid size-full place-items-center text-center transition duration-150'>
            Desarrollado ❤️ con por StrocsDev
          </Link>
        </GridItem>
      </Grid>
    </footer>
  )
}
