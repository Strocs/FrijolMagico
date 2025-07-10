'use client'

import Image from 'next/image'
import { DoodleLine } from '@/components/DoodleLine'
import Link from 'next/link'
import { paths } from '@/config/paths'
import { NewBadget } from './NewBadget'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
gsap.registerPlugin(useGSAP)

export const ApprovedArtistsCard = () => {
  const cardWrapperRef = useRef<HTMLAnchorElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  const { contextSafe } = useGSAP({ scope: cardWrapperRef })

  // Helper: apply tilt effect
  const applyTilt = (x: number, y: number, rect: DOMRect) => {
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const maxTilt = 8
    const rotateY = ((x - centerX) / centerX) * maxTilt
    const rotateX = -((y - centerY) / centerY) * maxTilt
    gsap.to(cardRef.current, {
      rotateY,
      rotateX,
      scale: 1.04,
      transformPerspective: 800,
      duration: 0.35,
      ease: 'power2.out',
    })
  }

  // Helper: reset tilt
  const resetTilt = () => {
    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      duration: 0.5,
      ease: 'power3.out',
    })
  }

  const handleMouseMove = contextSafe((e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    applyTilt(e.clientX - rect.left, e.clientY - rect.top, rect)
  })

  // Touch handlers
  const handleTouchMove = contextSafe((e: React.TouchEvent) => {
    if (!cardRef.current) return
    const touch = e.touches[0]
    const rect = cardRef.current.getBoundingClientRect()
    applyTilt(touch.clientX - rect.left, touch.clientY - rect.top, rect)
  })

  const handleActionLeave = contextSafe(() => {
    resetTilt()
  })

  return (
    <>
      <Link
        onMouseMove={handleMouseMove}
        onMouseLeave={handleActionLeave}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleActionLeave}
        ref={cardWrapperRef}
        href={paths.festival[2025].ilustracion}
        className='relative block size-full will-change-transform'>
        <NewBadget
          color='text-2025-orange'
          backgroundColor='bg-2025-white'
          outlineColor='outline-2025-orange'
        />
        <div
          ref={cardRef}
          className='from-2025-yellow to-2025-orange text-2025-white relative size-full overflow-hidden rounded-2xl bg-gradient-to-tr p-6 will-change-transform'>
          <Image
            src='/sections/festivales/2025/images/CITY.webp'
            alt='Ilustración de la ciudad de Coquimbo destruída por un Frijol Mágico'
            loading='eager'
            priority
            width={420}
            height={420}
            className='absolute right-0 bottom-4 left-0 m-auto w-full'
          />
          <Image
            src='/sections/festivales/2025/images/PJ.webp'
            alt='Ilustración de un Frijol Mágico maligno'
            loading='eager'
            priority
            width={420}
            height={420}
            className='animate-rock-bounce absolute right-0 bottom-6 w-2/3 lg:-right-24 lg:-bottom-8 lg:w-full'
          />

          <div className='flex h-full flex-col gap-4'>
            <h2 className='font-superfortress text-stroke-2025-white text-stroke-6 text-2025-orange block rounded-xl text-3xl leading-none font-black uppercase transition duration-300 [paint-order:stroke_fill]'>
              <span className='text-2025-white text-stroke-2025-pink'>
                Frijol
              </span>
              <br />
              <span className='text-2025-pink'>Mágico</span> <br /> 2025
            </h2>
            <div>
              <p className='font-josefin text-sm leading-none uppercase'>
                Ilustración <br /> Manualidades <br /> Narrativa Gráfica
              </p>
              <DoodleLine
                height='40px'
                loopCount={5}
                color='text-2025-orange'
              />
            </div>
          </div>
          <Image
            src='/sections/festivales/2025/images/GROUND.webp'
            alt='Ilustración de una mano indicando a los participantes del próximo festival'
            loading='eager'
            priority
            width={420}
            height={420}
            className='absolute right-0 bottom-0 left-0 w-full'
          />
        </div>
      </Link>
    </>
  )
}
