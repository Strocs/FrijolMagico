'use client'

import Image from 'next/image'
import Link from 'next/link'
import { paths } from '@/config/paths'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
gsap.registerPlugin(useGSAP)

export const FestivalCard = ({
  text,
  href,
}: {
  text: string
  href: string
}) => {
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
        href={href || paths.festival[2025].base}
        className='relative block size-full will-change-transform'>
        <div
          ref={cardRef}
          className='text-2025-white bg-2025-white relative size-full overflow-hidden rounded-2xl p-6 will-change-transform'>
          <Image
            src='/sections/festivales/2025/images/CITY.webp'
            alt='Ilustración de la ciudad de Coquimbo destruída por un Frijol Mágico'
            loading='eager'
            priority
            width={1440}
            height={902}
            sizes='30vw'
            className='absolute right-0 bottom-4 left-0 m-auto w-full opacity-25'
          />
          <Image
            src='/sections/festivales/2025/images/PJ.webp'
            alt='Ilustración de un Frijol Mágico maligno'
            loading='eager'
            priority
            width={1217}
            height={1648}
            sizes='30vw'
            className='animate-soft-bounce absolute right-0 bottom-6 w-2/3 delay-75 lg:-right-24 lg:-bottom-8 lg:w-full'
          />

          <div className='flex h-full flex-col gap-4'>
            <h2 className='font-superfortress text-stroke-2025-white text-stroke-6 text-2025-orange block rounded-xl text-3xl leading-none font-black uppercase transition duration-300 [paint-order:stroke_fill]'>
              {text}
            </h2>
          </div>
          <Image
            src='/sections/festivales/2025/images/GROUND.webp'
            alt='Ilustración de una mano indicando a los participantes del próximo festival'
            loading='eager'
            width={1440}
            height={648}
            sizes='50vw'
            className='absolute right-0 bottom-0 left-0 w-full'
          />
        </div>
      </Link>
    </>
  )
}
