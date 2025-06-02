'use client'

import { useEffect, useState } from 'react'
import { Instagram, Mail, X } from 'lucide-react'
import { useCatalog } from '@/contexts/CatalogContext'
import { getInstagramUserTag } from '@/utils/catalog'
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
    <div
      className={`text-fm-black fixed inset-0 z-50 overflow-hidden ${
        isArtistPanelOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
      } transition-opacity duration-300`}>
      <div
        className='bg-fm-black/10 fixed inset-0 backdrop-blur-sm'
        onClick={() => setArtistPanelOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}>
        <div className='h-full overflow-y-auto p-6'>
          <div className='mb-6 flex items-start justify-between'>
            <h2 className='text-2xl font-bold'>Detalles del Artista</h2>
            <button
              onClick={() => setArtistPanelOpen(false)}
              className='cursor-pointer rounded-full p-1 hover:bg-gray-100'
              aria-label='Cerrar panel'>
              <X className='h-6 w-6' />
            </button>
          </div>

          {selectedArtist && (
            <div className='space-y-6'>
              <div className='flex items-center space-x-4'>
                <Image
                  src={encodeURI(`/images/catalog/${selectedArtist.avatar}`)}
                  alt={`Imagen de ${selectedArtist.name}`}
                  width={80}
                  height={80}
                  className='border-fm-green h-20 w-20 rounded-full border-2 object-cover'
                />
                <div>
                  <h3 className='text-fm-orange text-2xl font-bold'>
                    {selectedArtist.name}
                  </h3>
                  <p className='text-sm text-gray-600'>{selectedArtist.city}</p>
                  <span className='bg-fm-green/10 text-fm-green mt-1 inline-block rounded-sm px-2 py-1 text-xs'>
                    {selectedArtist.work_area}
                  </span>
                </div>
              </div>

              <div>
                <h4 className='mb-2 font-semibold'>Biografía</h4>
                <p className='text-gray-700'>{selectedArtist.bio}</p>
              </div>

              <div>
                <h4 className='mb-2 font-semibold'>Contacto</h4>
                <div className='space-y-2'>
                  <a
                    href={`mailto:${selectedArtist.email}`}
                    className='text-fm-green hover:text-fm-orange transition-color flex items-center duration-150'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <span className='w-6'>
                      <Mail size={18} />
                    </span>
                    <span>{selectedArtist.email}</span>
                  </a>
                  <a
                    href={selectedArtist.rrss}
                    className='text-fm-green hover:text-fm-orange transition-color flex items-center duration-150'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <span className='w-6'>
                      <Instagram size={18} />
                    </span>
                    <span>{getInstagramUserTag(selectedArtist.rrss)}</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
