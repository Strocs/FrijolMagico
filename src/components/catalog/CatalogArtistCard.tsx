'use client'

import type { CatalogArtist } from '@/types/catalog'
import { Instagram, Mail } from 'lucide-react'
import { formatUrl } from '@/utils/catalog'
import Image from 'next/image'
import { useCatalog } from '@/contexts/CatalogContext'

export const CatalogArtistCard = ({
  id,
  avatar,
  name,
  city,
  work_area,
  bio,
  email,
  rrss,
}: CatalogArtist) => {
  const { selectedArtist, setSelectedArtist, setArtistPanelOpen } = useCatalog()

  const isSelected = selectedArtist?.id === id
  const rrssUrl = formatUrl(rrss)

  const handleViewMoreButton = () => {
    setSelectedArtist({
      id,
      avatar,
      name,
      city,
      work_area,
      bio,
      email,
      rrss,
    })
    setArtistPanelOpen(true)
  }

  return (
    <li
      className={`text-fm-green group bg-fm-white hover:bg-fm-dark/10 outline-fm-green w-full cursor-default outline-1 outline-dashed sm:max-w-xs lg:max-w-sm ${
        isSelected ? 'scale-105 bg-slate-200' : ''
      } relative space-y-6 rounded-xl p-4 transition duration-300`}>
      <section className='flex items-center gap-4'>
        <Image
          loading='lazy'
          src={encodeURI(`/images/catalog/${avatar}`)}
          alt={`Imágen de ${name}`}
          width={48}
          height={48}
          className='h-12 w-12 overflow-hidden rounded-full bg-slate-300 object-cover'
        />
        <section className='space-y-0.5'>
          <h2 className='ml-1 text-xl font-bold'>{name}</h2>
          <div className='flex gap-2'>
            <span className='bg-fm-orange text-fm-white rounded px-2 py-1 text-xs'>
              {work_area}
            </span>
            <span className='bg-fm-yellow text-fm-white rounded px-2 py-1 text-xs'>
              {city}
            </span>
          </div>
        </section>
      </section>

      <section className='text-sm'>
        <section className='flex w-full items-center gap-2'>
          <b>Contacto:</b>
          <a
            href={rrssUrl}
            aria-label='Instagram'
            className='hover:scale-105'
            target='_blank'
            rel='noopener noreferrer'>
            <Instagram size={18} />
          </a>
          <a
            href={`mailto:${email}`}
            aria-label='Email'
            className='hover:scale-105'>
            <Mail size={18} />
          </a>
        </section>

        <button
          onClick={handleViewMoreButton}
          className={`outline-fm-white absolute right-4 bottom-4 rotate-6 cursor-pointer outline group-hover:rotate-0 ${
            isSelected ? 'bg-fm-green rotate-0' : 'bg-fm-orange'
          } text-fm-white rounded px-3 py-1.5 text-xs transition duration-300`}>
          Ver más
        </button>
      </section>
    </li>
  )
}
