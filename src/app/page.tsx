import { GridItem } from '@/components/GridItem'
import { Grid } from '@/components/Grid'
import { CatalogCard } from '@/components/home/CatalogCard'
import { HeroCard } from '@/components/home/HeroCard'
import { LogoHomeLink } from '@/components/LogoHomeLink'
import { SpotifyCard } from '@/components/home/SpotifyCard'
import { RRSSCard } from '@/components/home/RRSSCard'
import DoodleLine from '@/components/DoodleLine'
import { ApprovedArtistsCard } from '@/components/home/ApprovedArtistsCard'

export default function Home() {
  return (
    <main className='mx-auto flex h-full w-full max-w-4xl flex-1 items-center p-4'>
      <Grid
        className='gap-4'
        row={{ base: 8, sm: 4, lg: 3 }}
        col={{ base: 1, sm: 6, lg: 9 }}>
        <GridItem
          row={{ base: 1, sm: 1, lg: 1 }}
          col={{ base: 1, sm: 4, lg: 6 }}>
          <HeroCard />
        </GridItem>
        <GridItem
          row={{ base: 2, sm: 2, lg: 2 }}
          col={{ base: 1, sm: 3, lg: 3 }}>
          <ApprovedArtistsCard />
        </GridItem>
        <GridItem
          row={{ base: 2, sm: 2, lg: 2 }}
          col={{ base: 1, sm: 3, lg: 3 }}>
          <CatalogCard />
        </GridItem>
        <GridItem
          className='order-last sm:order-first lg:order-none'
          row={{ base: 1, sm: 1, lg: 1 }}
          col={{ base: 1, sm: 2, lg: 3 }}>
          <div className='flex size-full flex-col items-center justify-center'>
            <DoodleLine className='sm:hidden' />
            <LogoHomeLink />
            <p className='text-fm-green text-center sm:hidden'>
              Asociación Cultural <strong>Frijol Mágico</strong>{' '}
              <span className='text-fm-orange font-black'>2025</span> 🌱
            </p>
          </div>
        </GridItem>
        <GridItem
          row={{ base: 1, sm: 1, lg: 1 }}
          col={{ base: 1, sm: 3, lg: 3 }}>
          <SpotifyCard />
        </GridItem>
        <GridItem
          row={{ base: 1, sm: 1, lg: 1 }}
          col={{ base: 1, sm: 3, lg: 3 }}>
          <RRSSCard />
        </GridItem>
      </Grid>
    </main>
  )
}
