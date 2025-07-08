'use client'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

// Image size configuration for responsive loading
const imageSizes = {
  city: {
    sizes: '100vw',
    breakpoints: {
      mobile: { width: 1050, height: 657 },
      desktop: { width: 1920, height: 1313 },
    },
  },
  ground: {
    sizes: '100vw',
    breakpoints: {
      mobile: { width: 960, height: 486 },
      desktop: { width: 1920, height: 971 },
    },
  },
}

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
      // Skip animations if user prefers reduced motion
      if (prefersReducedMotion) return

      // Create a main timeline for better performance
      const tl = gsap.timeline()

      // Shared ScrollTrigger configuration
      const scrollConfig = {
        trigger: containerRef.current,
        start: 'top top', // Animation starts when the top of the body hits the top of the viewport
        end: 'max', // Animation ends when the scroll position reaches the maximum scroll position of the page
        scrub: prefersReducedMotion ? 0 : 1,
        invalidateOnRefresh: true,
      }

      // City layer parallax - appears in middle of scroll
      if (layerCityRef.current) {
        tl.fromTo(
          layerCityRef.current,
          {
            yPercent: 25, // Start 20% above its natural position
          },
          {
            yPercent: 0, // End 20% below its natural position
            ease: 'none', // Use 'none' for linear scrubbing with ScrollTrigger
            duration: 1,
            transformOrigin: 'center center',
            force3D: true, // Force hardware acceleration
          },
          0,
        )
      }

      // Ground layer parallax - appears last
      if (layerGroundRef.current) {
        tl.fromTo(
          layerGroundRef.current,
          {
            yPercent: 100, // Start 50% below its natural position
          },
          {
            yPercent: 0, // End 50% above its natural position
            ease: 'none', // Use 'none' for linear scrubbing with ScrollTrigger
            duration: 1,
            transformOrigin: 'center bottom',
            force3D: true, // Force hardware acceleration
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
      <div className='bg-2025-yellow fixed inset-0 scale-105'>
        {/* Overlay blur effect */}
        <div className='fixed inset-0 z-0 bg-transparent backdrop-blur-sm'></div>
        {/* City layer - background parallax */}{' '}
        <Image
          ref={layerCityRef}
          src='/sections/festivales/2025/images/city.png'
          alt='Imágen de la ciudad de coquimbo destruída por un frijol maligno'
          width={imageSizes.city.breakpoints.desktop.width}
          height={imageSizes.city.breakpoints.desktop.height}
          sizes={imageSizes.city.sizes}
          className='absolute right-0 left-0 -z-15 transform-gpu will-change-transform'
          priority
          quality={90}
        />
        {/* Ground layer - foreground parallax */}
        <Image
          src='/sections/festivales/2025/images/ground.png'
          ref={layerGroundRef}
          alt='Imágen del suelo de coquimbo destruído por un frijol maligno'
          width={imageSizes.ground.breakpoints.desktop.width}
          height={imageSizes.ground.breakpoints.desktop.height}
          sizes={imageSizes.ground.sizes}
          className='absolute right-0 bottom-0 left-0 -z-10 transform-gpu will-change-transform'
          priority
          quality={90}
        />
        {/* Rock elements - static for now */}
        <Image
          src='/sections/festivales/2025/images/rock-center.png'
          alt='Imágen de la roca central de coquimbo destruída por un frijol maligno'
          width={186}
          height={339}
          className='absolute top-1/2 right-0 left-0 -z-5 mx-auto'
          priority
        />
        <Image
          src='/sections/festivales/2025/images/rock-left.png'
          alt='Imágen de la roca izquierda de coquimbo destruída por un frijol maligno'
          width={498}
          height={574}
          className='absolute top-0 left-0 -z-5'
          priority
        />
        <Image
          src='/sections/festivales/2025/images/rock-right.png'
          alt='Imágen de la roca derecha de coquimbo destruída por un frijol maligno'
          width={333}
          height={430}
          className='absolute top-0 right-0 -z-5'
          priority
        />
      </div>
    </div>
  )
}
