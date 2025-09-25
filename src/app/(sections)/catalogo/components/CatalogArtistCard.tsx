'use client'

import Image from 'next/image'
import type { CatalogArtist } from '../types/catalog'
import { Instagram, Mail } from 'lucide-react'
import { useCatalogPanelStore } from '../store/useCatalogPanelStore'
import { cn } from '@/utils/utils'

export const CatalogArtistCard = ({
  id,
  avatar,
  name,
  city,
  country,
  category,
  bio,
  email,
  rrss,
  collective,
}: CatalogArtist) => {
  const selectedArtist = useCatalogPanelStore((state) => state.selectedArtist)
  const setSelectedArtist = useCatalogPanelStore(
    (state) => state.setSelectedArtist,
  )
  const setArtistPanelOpen = useCatalogPanelStore(
    (state) => state.setArtistPanelOpen,
  )

  const isSelected = selectedArtist?.id === id

  const handleViewMoreButton = () => {
    setSelectedArtist({
      id,
      avatar,
      name,
      city,
      country,
      category,
      bio,
      email,
      rrss,
      collective,
    })
    setArtistPanelOpen(true)
  }

  return (
    <li
      className={cn(
        'text-fm-orange group hover:bg-fm-white outline-fm-dark/50 w-full cursor-default bg-transparent outline-1 outline-dashed hover:outline-solid sm:max-w-xs lg:max-w-sm',
        'relative flex flex-col justify-around space-y-6 rounded-xl p-4 transition-all duration-300',
        {
          'bg-fm-white scale-105 outline-solid': isSelected,
        },
      )}>
      <section className='flex items-center gap-4'>
        <Image
          loading='lazy'
          src={encodeURI(`/sections/catalogo/images/artists/${avatar}`)}
          alt={`Imágen de ${name}`}
          width={48}
          height={48}
          className='h-12 w-12 shrink-0 overflow-hidden rounded-full bg-slate-300 object-cover'
        />
        <section className=''>
          <h2 className='text-fm-orange text-xl leading-none font-bold transition-colors duration-300'>
            {name}
          </h2>
          {collective && (
            <p className='text-fm-black mt-1 text-sm leading-none'>
              <span className='font-semibold'>Colectivo:</span>{' '}
              {collective.name}
            </p>
          )}
          <div className='flex gap-2 py-1'>
            <span className='bg-fm-orange/20 text-fm-orange rounded px-2 py-1 text-xs leading-none font-medium'>
              {category}
            </span>
            <span className='bg-fm-orange/20 text-fm-orange rounded px-2 py-1 text-xs leading-none font-medium'>
              {city}
            </span>
          </div>
        </section>
      </section>

      <section className='text-sm'>
        <section className='text-fm-black/80 flex w-full items-center gap-2'>
          <b className='font-semibold'>Contacto:</b>
          <a
            href={rrss}
            aria-label='Instagram'
            className='hover:text-fm-orange transition duration-300 hover:scale-105'
            target='_blank'
            rel='noopener noreferrer'>
            <Instagram size={18} />
          </a>
          <a
            href={`mailto:${email}`}
            aria-label='Email'
            className='hover:text-fm-orange transition duration-300 hover:scale-105'>
            <Mail size={18} />
          </a>
        </section>

        <button
          onClick={handleViewMoreButton}
          aria-label={`Ver más detalles de ${name}`}
          className={cn([
            'outline-fm-white absolute right-4 bottom-4 rotate-6 cursor-pointer outline group-hover:rotate-0',
            'text-fm-white hover:bg-fm-orange outline-fm-orange hover:text-fm-white rounded px-3 py-1.5 text-xs outline transition duration-300',
            isSelected ? 'bg-fm-orange rotate-0' : 'bg-fm-white text-fm-orange',
          ])}>
          Ver más
        </button>
      </section>
    </li>
  )
}
