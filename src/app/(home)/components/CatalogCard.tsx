import Image from 'next/image'
import Link from 'next/link'
import { paths } from '@/config/paths'

export const CatalogCard = () => {
  return (
    <Link
      href={paths.catalog}
      className='group from-fm-yellow to-fm-orange relative flex h-full flex-col !justify-start gap-2 overflow-hidden rounded-2xl bg-gradient-to-tl py-4 text-center transition-transform sm:py-10 sm:hover:scale-[1.03]'>
      <Image
        src='/images/enredadera-esquina.png'
        width={400}
        height={400}
        loading='eager'
        alt='Ilustración de enredadera temática de Frijol Mágico'
        className='absolute -bottom-10 left-0 z-10 w-2/3 rotate-180 sm:h-auto xl:w-auto'
      />
      <h2 className='text-fm-white z-10 text-5xl font-black sm:text-4xl'>
        Catálogo
      </h2>
      <p className='text-fm-white z-10 pb-10 font-normal'>
        Descubre a tu próximo <br />
        <span className='bg-fm-green text-fm-white rounded-lg px-4 text-xl font-bold uppercase'>
          ilustrador favorito
        </span>
      </p>
      {/* <CardsSkeletonAnimated /> */}
      <div className='w-full space-y-2 overflow-hidden'>
        <div className='animate-card-slides -ml-16 flex group-hover:[animation-play-state:running] sm:[animation-play-state:paused]'>
          <div className='bg-fm-orange mr-2 h-16 w-32 shrink-0 rounded-md'></div>
          <div className='bg-fm-orange mr-2 h-16 w-32 shrink-0 rounded-md'></div>
          <div className='bg-fm-orange mr-2 h-16 w-32 shrink-0 rounded-md'></div>
          <div className='bg-fm-orange mr-2 h-16 w-32 shrink-0 rounded-md'></div>
          <div className='bg-fm-orange mr-2 h-16 w-32 shrink-0 rounded-md'></div>
          <div className='bg-fm-orange mr-2 h-16 w-32 shrink-0 rounded-md'></div>
          <div className='bg-fm-orange mr-2 h-16 w-32 shrink-0 rounded-md'></div>
          <div className='bg-fm-orange mr-2 h-16 w-32 shrink-0 rounded-md'></div>
        </div>
        <div className='animate-card-slides flex group-hover:[animation-play-state:running] sm:[animation-play-state:paused]'>
          <div className='bg-fm-orange mr-2 h-16 w-32 shrink-0 rounded-md'></div>
          <div className='bg-fm-orange mr-2 h-16 w-32 shrink-0 rounded-md'></div>
          <div className='bg-fm-orange mr-2 h-16 w-32 shrink-0 rounded-md'></div>
          <div className='bg-fm-orange mr-2 h-16 w-32 shrink-0 rounded-md'></div>
          <div className='bg-fm-orange mr-2 h-16 w-32 shrink-0 rounded-md'></div>
          <div className='bg-fm-orange mr-2 h-16 w-32 shrink-0 rounded-md'></div>
          <div className='bg-fm-orange mr-2 h-16 w-32 shrink-0 rounded-md'></div>
          <div className='bg-fm-orange mr-2 h-16 w-32 shrink-0 rounded-md'></div>
        </div>
      </div>
    </Link>
  )
}
