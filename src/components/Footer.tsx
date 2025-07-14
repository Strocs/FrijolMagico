import Link from 'next/link'
import Image from 'next/image'
import { DoodleLine } from './DoodleLine'
import { Grid } from '@/components/Grid'
import { GridItem } from '@/components/GridItem'
import { SpotifyCard } from '@/app/(home)/components/SpotifyCard'
import { RRSSCard } from '@/app/(home)/components/RRSSCard'
import { BackToTop } from './BackToTop'
import { paths } from '@/config/paths'
import { cn } from '@/lib/utils'

interface FooterProps {
  doodleColor?: string
}

export const Footer = ({ doodleColor = 'text-fm-green' }: FooterProps) => {
  return (
    <footer className={cn('mx-auto w-full max-w-3xl px-4', doodleColor)}>
      <BackToTop />
      <DoodleLine />
      <Grid
        row={{ base: 6, sm: 4, lg: 4 }}
        col={{ base: 1, sm: 6, lg: 8 }}
        className='gap-2 pt-4 sm:gap-4'>
        <GridItem
          row={{ base: 2, sm: 2, lg: 2 }}
          col={{ base: 1, sm: 4, lg: 6 }}>
          <Link
            href={paths.home}
            className='bg-flexible-dark group relative grid size-full place-items-center overflow-hidden rounded-2xl text-center'>
            <Image
              src='/images/enredadera.png'
              alt='Frijol Mágico'
              width={600}
              height={600}
              className='absolute -bottom-16 sm:-bottom-40'
            />
            <p className='text-flexible-yellow z-10 text-2xl font-black duration-300 group-hover:scale-110'>
              <span className='text-flexible-white font-bold'>Volver al </span>
              Inicio
            </p>
          </Link>
        </GridItem>

        <GridItem
          row={{ base: 2, sm: 2, lg: 3 }}
          col={{ base: 1, sm: 2, lg: 2 }}>
          <SpotifyCard />
        </GridItem>

        <GridItem col={{ base: 1, sm: 3, lg: 6 }} row={{ base: 1 }}>
          <RRSSCard orientation='horizontal' />
        </GridItem>

        <GridItem col={{ base: 1, sm: 3, lg: 8 }} row={{ base: 1 }}>
          <div className='bg-flexible-white flex size-full flex-col items-center justify-center rounded-2xl md:flex-row md:gap-8'>
            <p className='font-josefin text-flexible-green text-lg leading-none font-black'>
              Frijol Mágico{' '}
              <span className='text-flexible-green'>
                {new Date().getFullYear()}{' '}
              </span>
              🌱
            </p>

            <Link
              href='https://github.com/Strocs'
              className='hover:text-flexible-orange text-flexible-green text-center text-sm transition duration-150'>
              Desarrollado con ❤ por StrocsDev
            </Link>
          </div>
        </GridItem>
      </Grid>
    </footer>
  )
}
