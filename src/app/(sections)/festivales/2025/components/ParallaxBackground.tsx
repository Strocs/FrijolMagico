'use client'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

// Check if user prefers reduced motion
const prefersReducedMotion =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

export const ParallaxBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const layerCityRef = useRef<HTMLImageElement>(null)
  const layerGroundRef = useRef<HTMLImageElement>(null)

  useGSAP(
    () => {
      if (prefersReducedMotion) return
      const tl = gsap.timeline()

      const scrollConfig = {
        trigger: containerRef.current,
        start: 'top top',
        end: 'max',
        scrub: prefersReducedMotion ? 0 : 1,
        invalidateOnRefresh: true,
      }

      // City layer parallax
      if (layerCityRef.current) {
        tl.fromTo(
          layerCityRef.current,
          {
            yPercent: 75,
          },
          {
            yPercent: 0,
            ease: 'none',
            duration: 1,
            transformOrigin: 'center center',
            force3D: true,
          },
          0,
        )
      }

      // Ground layer parallax - appears last
      if (layerGroundRef.current) {
        tl.fromTo(
          layerGroundRef.current,
          {
            yPercent: 300,
          },
          {
            yPercent: 0,
            ease: 'none',
            duration: 1,
            transformOrigin: 'center bottom',
            force3D: true,
          },
          0,
        )
      }

      // Add ScrollTrigger to the timeline
      ScrollTrigger.create({
        ...scrollConfig,
        animation: tl,
      })
    },
    { scope: containerRef },
  )

  return (
    <div ref={containerRef} className='relative -z-10 overflow-hidden'>
      <div className='from-2025-yellow to-2025-orange fixed inset-0 bg-gradient-to-tr'>
        <Image
          src='/sections/festivales/2025/images/CITY.webp'
          alt='Imágen de la ciudad de Coquimbo destruída por un frijol maligno'
          ref={layerCityRef}
          loading='eager'
          width={1440}
          height={902}
          sizes='(max-width: 768px) 50vw, 1440px'
          className='absolute right-0 bottom-6 left-0 -z-15 w-full transform-gpu object-cover will-change-transform sm:bottom-0'
        />
        <Image
          src='/sections/festivales/2025/images/GROUND.webp'
          alt='Suelo de Coquimbo destruído por un frijol maligno'
          ref={layerGroundRef}
          width={1440}
          height={648}
          sizes='(max-width: 768px) 50vw, 1440px'
          className='absolute right-0 bottom-0 left-0 -z-10 w-full transform-gpu object-cover will-change-transform'
        />
        <Image
          src='/sections/festivales/2025/images/ROCKS.webp'
          alt='Rocas flotando encima de Coquimbo, destruída por un frijol maligno'
          width={1317}
          height={798}
          sizes='(max-width: 768px) 50vw, 1317px'
          className='animate-rock-bounce absolute right-0 bottom-8 left-0 -z-5 mx-auto'
        />
      </div>
    </div>
  )
}
