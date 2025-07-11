import Link from 'next/link'
import siteData from '@/data/site.json'
const SITE = siteData
import { Spotify } from '@/components/icons/Spotify'
import clsx from 'clsx'

export const SpotifyCard = ({
  orientation = 'horizontal',
}: {
  orientation?: 'vertical' | 'horizontal'
}) => {
  return (
    <Link
      href={SITE.podcast}
      target='_blank'
      rel='noopener noreferrer'
      aria-label='Escucha nuestro Podcast en Spotify'
      className={clsx(
        'bg-flexible-white group sm:bg-flexible-yellow text-flexible-orange flex size-full items-center justify-center gap-4 rounded-2xl py-4 transition-[gap] duration-150 hover:gap-2',
        {
          'flex-col': orientation === 'vertical',
          'flex-row': orientation === 'horizontal',
        },
      )}>
      <p className='text-flexible-orange text-center text-3xl leading-6 font-black uppercase'>
        Escucha <br />
        <span className='text-flexible-green sm:text-flexible-white text-2xl leading-none font-bold tracking-widest'>
          nuestro
        </span>
        <br />
        Podcast
      </p>
      <div className='transition duration-150 group-hover:scale-110 group-hover:rotate-6'>
        <Spotify size={52} />
      </div>
    </Link>
  )
}
