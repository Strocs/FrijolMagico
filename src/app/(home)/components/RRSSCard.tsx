import Link from 'next/link'
import { Instagram } from '@/components/icons/Instagram'
import { Facebook } from '@/components/icons/Facebook'
import clsx from 'clsx'
import siteData from '@/data/site.json'
const SITE = siteData

export const RRSSCard = ({
  orientation = 'vertical',
}: {
  orientation?: 'vertical' | 'horizontal'
}) => {
  return (
    <div
      className={clsx(
        'bg-flexible-orange font-josefin text-flexible-white flex size-full items-center justify-center rounded-2xl',
        {
          'flex-col gap-2 p-2': orientation === 'vertical',
          'flex-row gap-8 p-3': orientation === 'horizontal',
        },
      )}>
      <p className='-mb-1 text-2xl leading-none font-black uppercase'>
        Síguenos!
      </p>
      <div className='flex items-center gap-8'>
        <Link
          href={SITE.social_media.ig}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Síguenos en Instagram'
          className='hover:text-flexible-yellow transition duration-150 hover:scale-110 hover:rotate-6'>
          <Instagram size={orientation === 'vertical' ? 52 : 32} />
        </Link>
        <Link
          href={SITE.social_media.fb}
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Síguenos en Facebook'
          className='hover:text-flexible-yellow transition duration-150 hover:scale-110 hover:rotate-6'>
          <Facebook size={orientation === 'vertical' ? 44 : 28} />
        </Link>
      </div>
    </div>
  )
}
