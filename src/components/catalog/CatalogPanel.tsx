'use client'

import { useEffect, useState } from 'react'
import { Instagram, Mail, X } from 'lucide-react'
import { useCatalog } from '@/contexts/CatalogContext'
import { getInstagramUserTag } from '@/utils/catalog'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export const CatalogPanel = () => {
  const { isArtistPanelOpen, setArtistPanelOpen, selectedArtist } = useCatalog()
  const [isVisible, setIsVisible] = useState(false)

  // Handle animation when opening/closing
  useEffect(() => {
    if (isArtistPanelOpen) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
      // const timer = setTimeout(() => {
      // }, 300) // Match this with your CSS transition duration
      // return () => clearTimeout(timer)
    }
  }, [isArtistPanelOpen])

  if (!isVisible) return null

  return (
    <aside
      className={cn(
        'text-fm-black fixed inset-0 z-50 overflow-hidden transition-opacity duration-300',
        isArtistPanelOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
      )}
      aria-label='Panel de detalles del artista'>
      <div
        className='bg-fm-black/10 fixed inset-0 backdrop-blur-sm'
        onClick={() => setArtistPanelOpen(false)}
        role='presentation'
      />

      <section
        className={cn(
          'bg-fm-white fixed inset-0 w-full max-w-md shadow-xl transition-transform duration-300 ease-in-out sm:top-4 sm:right-4 sm:bottom-4 sm:left-auto sm:rounded-2xl',
          isVisible ? 'translate-x-0' : 'translate-x-full',
        )}
        aria-labelledby='artist-details-heading'>
        <div className='h-full overflow-y-auto p-6'>
          <header className='mb-6 flex items-start justify-between'>
            <h2 id='artist-details-heading' className='text-2xl font-bold'>
              Detalles del Artista
            </h2>
            <button
              onClick={() => setArtistPanelOpen(false)}
              className='hover:text-fm-orange cursor-pointer rounded-full p-1 transition duration-150 hover:scale-110'
              aria-label='Cerrar panel'>
              <X className='h-6 w-6' />
            </button>
          </header>

          {selectedArtist && (
            <article className='space-y-6'>
              <section className='flex items-center space-x-4'>
                <figure className='relative h-20 w-20'>
                  <Image
                    src={encodeURI(`/images/catalog/${selectedArtist.avatar}`)}
                    alt={`Imagen de ${selectedArtist.name}`}
                    fill
                    className='border-fm-green rounded-full border-2 object-cover'
                  />
                </figure>
                <div>
                  <h3 className='text-fm-orange text-2xl font-bold'>
                    {selectedArtist.name}
                  </h3>
                  <p className='text-sm text-gray-600'>{selectedArtist.city}</p>
                  <span className='bg-fm-green/10 text-fm-green mt-1 inline-block rounded-sm px-2 py-1 text-xs'>
                    {selectedArtist.work_area}
                  </span>
                </div>
              </section>

              <section>
                <h4 className='mb-2 font-semibold'>Biografía</h4>
                <p className='text-gray-700'>{selectedArtist.bio}</p>
              </section>

              <section>
                <h4 className='mb-2 font-semibold'>Contacto</h4>
                <address className='space-y-2 not-italic'>
                  <a
                    href={`mailto:${selectedArtist.email}`}
                    className='text-fm-green hover:text-fm-orange flex items-center transition-colors duration-150'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <span className='w-6'>
                      <Mail size={18} />
                    </span>
                    <span>{selectedArtist.email}</span>
                  </a>
                  <a
                    href={selectedArtist.rrss}
                    className='text-fm-green hover:text-fm-orange flex items-center transition-colors duration-150'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <span className='w-6'>
                      <Instagram size={18} />
                    </span>
                    <span>{getInstagramUserTag(selectedArtist.rrss)}</span>
                  </a>
                </address>
              </section>
            </article>
          )}
        </div>
      </section>
    </aside>
  )
}
