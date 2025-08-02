'use client'

import { useEffect, useState } from 'react'
import { Instagram, Mail, X } from 'lucide-react'
import { useCatalogPanelStore } from '../store/useCatalogPanelStore'
import { getInstagramUserTag } from '@/lib/utils'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { CatalogArtist } from '@/types/artists'
import Markdown from 'react-markdown'

export const CatalogPanel = ({
  catalogData,
}: {
  catalogData: CatalogArtist[]
}) => {
  const isArtistPanelOpen = useCatalogPanelStore(
    (state) => state.isArtistPanelOpen,
  )
  const setArtistPanelOpen = useCatalogPanelStore(
    (state) => state.setArtistPanelOpen,
  )
  const setSelectedArtist = useCatalogPanelStore(
    (state) => state.setSelectedArtist,
  )

  const selectedArtist = useCatalogPanelStore((state) => state.selectedArtist)
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Handle animation when opening/closing
  useEffect(() => {
    if (isArtistPanelOpen) {
      setIsMounted(true)
      setTimeout(() => setIsVisible(true), 10) // allow mount before animating in
      window.history.pushState({ artistPanel: true }, '')
    } else {
      setIsVisible(false)
      // Unmount after animation duration
      const timeout = setTimeout(() => setIsMounted(false), 300)
      return () => clearTimeout(timeout)
    }
  }, [isArtistPanelOpen])

  // Handle back gesture (popstate) to close the panel instead of navigating back
  useEffect(() => {
    const handlePopState = () => {
      if (isArtistPanelOpen) {
        setArtistPanelOpen(false)
      }
    }
    window.addEventListener('popstate', handlePopState)
    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [isArtistPanelOpen, setArtistPanelOpen])

  const handleChangePanelToCollectiveMember = (collectiveMemberId: string) => {
    if (!selectedArtist?.collective) return

    const collectiveMember = catalogData.find(
      (artist) => artist.id === collectiveMemberId,
    )

    if (collectiveMember) {
      setSelectedArtist(collectiveMember)
      setArtistPanelOpen(true)
    }
  }

  if (!isMounted) return null

  return (
    <div
      className={cn(
        'text-fm-black fixed inset-0 z-50 overflow-hidden backdrop-blur-sm transition-opacity duration-300',
        isVisible ? 'opacity-100' : 'pointer-events-none opacity-0',
      )}
      aria-label='Panel de detalles del artista'>
      <div
        className='fixed inset-0'
        onClick={() => setArtistPanelOpen(false)}
        role='presentation'
      />

      <aside
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
                <figure className='relative h-20 w-20 shrink-0'>
                  <Image
                    src={encodeURI(
                      `/sections/catalogo/images/artists/${selectedArtist.avatar}`,
                    )}
                    alt={`Imagen de ${selectedArtist.name}`}
                    fill
                    className='border-fm-green rounded-full border-2 object-cover'
                  />
                </figure>
                <div>
                  <h3 className='text-fm-orange text-2xl leading-none font-bold'>
                    {selectedArtist.name}
                  </h3>
                  <p className='text-sm text-gray-600'>{selectedArtist.city}</p>
                  <span className='bg-fm-green/10 text-fm-green mt-1 inline-block rounded-sm px-2 py-1 text-xs'>
                    {selectedArtist.category}
                  </span>
                </div>
              </section>

              {selectedArtist.collective && (
                <section>
                  <p className='text-fm-black'>
                    <strong>Colectivo</strong>: {selectedArtist.collective.name}
                  </p>
                  <div className='flex gap-1 text-sm'>
                    <p>Miembros:</p>
                    <ul className='flex gap-2'>
                      {selectedArtist.collective.members.map(
                        (member, index) => (
                          <li key={index}>
                            <button
                              onClick={() =>
                                handleChangePanelToCollectiveMember(member.id)
                              }
                              className='text-fm-orange cursor-pointer hover:underline'>
                              {member.name}
                            </button>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                </section>
              )}

              <section>
                <h4 className='mb-2 font-semibold'>Biografía</h4>
                <div className='flex flex-col gap-2 text-sm'>
                  <Markdown>{selectedArtist.bio}</Markdown>
                </div>
              </section>

              <section>
                <h4 className='mb-2 font-semibold'>Contacto</h4>
                <address className='space-y-2 not-italic'>
                  <a
                    href={`mailto:${selectedArtist.email}`}
                    className='hover:text-fm-orange flex items-center transition-colors duration-150'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <span className='w-6'>
                      <Mail size={18} />
                    </span>
                    <span>{selectedArtist.email}</span>
                  </a>
                  <a
                    href={selectedArtist.rrss}
                    className='hover:text-fm-orange flex items-center transition-colors duration-150'
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
      </aside>
    </div>
  )
}
