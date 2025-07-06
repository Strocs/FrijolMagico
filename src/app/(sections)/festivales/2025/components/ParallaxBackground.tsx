'use client'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export const ParallaxBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const layerCityRef = useRef<HTMLImageElement>(null)
  const layerGroundRef = useRef<HTMLImageElement>(null)
  const layerRockCenterRef = useRef<HTMLImageElement>(null)
  const layerRockLeftRef = useRef<HTMLImageElement>(null)
  const layerRockRightRef = useRef<HTMLImageElement>(null)

  // Velocity config for each layer (higher = faster)
  const velocity = {
    city: 10,
    ground: 20,
    rock: 30,
    scrollCity: 50,
    scrollGround: 80,
    scrollRock: 100,
  }
  // Smoothing factor for lerp
  const smoothing = 0.12

  // Initial Y offsets for each layer (match your -bottom or top-1/2 values)
  const initialY = {
    city: -30 * 16, // -30rem in px
    ground: -40 * 16, // -40rem in px
    rockCenter: 0, // top-1/2, handled by translateY in y
    rockLeft: 0,
    rockRight: 0,
  }

  // Store target and current positions for smooth rAF animation
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const rAF = useRef<number | null>(null)

  useGSAP(
    () => {
      if (!containerRef.current) return

      // Mouse move parallax
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e
        const { innerWidth, innerHeight } = window
        target.current.x = (clientX / innerWidth - 0.5) * 2
        target.current.y = (clientY / innerHeight - 0.5) * 2
      }

      // Scroll parallax (only Y, inverse direction, with initial offset)
      const scrollHandler = () => {
        const scrollY = window.scrollY
        const docHeight =
          document.documentElement.scrollHeight - window.innerHeight
        const progress = docHeight > 0 ? scrollY / docHeight : 0

        if (layerCityRef.current)
          gsap.to(layerCityRef.current, {
            x: current.current.x * velocity.city,
            y:
              current.current.y * velocity.city -
              progress * (initialY.city * -1),
            overwrite: 'auto',
            duration: 0.6,
            ease: 'power1.out',
          })
        if (layerGroundRef.current)
          gsap.to(layerGroundRef.current, {
            x: current.current.x * velocity.ground,
            y:
              current.current.y * velocity.ground -
              progress * (initialY.ground * -1),
            overwrite: 'auto',
            duration: 0.6,
            ease: 'power1.out',
          })
        if (layerRockCenterRef.current)
          gsap.to(layerRockCenterRef.current, {
            x: current.current.x * velocity.rock,
            y:
              initialY.rockCenter +
              current.current.y * velocity.rock -
              progress * 200, // 200px scroll range for center rock
            overwrite: 'auto',
            duration: 0.6,
            ease: 'power1.out',
          })
        if (layerRockLeftRef.current)
          gsap.to(layerRockLeftRef.current, {
            x: current.current.x * velocity.rock,
            y:
              initialY.rockLeft +
              current.current.y * velocity.rock -
              progress * 200,
            overwrite: 'auto',
            duration: 0.6,
            ease: 'power1.out',
          })
        if (layerRockRightRef.current)
          gsap.to(layerRockRightRef.current, {
            x: current.current.x * velocity.rock,
            y:
              initialY.rockRight +
              current.current.y * velocity.rock -
              progress * 200,
            overwrite: 'auto',
            duration: 0.6,
            ease: 'power1.out',
          })
      }

      // Animate loop for mouse movement
      const animate = () => {
        current.current.x += (target.current.x - current.current.x) * smoothing
        current.current.y += (target.current.y - current.current.y) * smoothing
        scrollHandler()
        rAF.current = requestAnimationFrame(animate)
      }

      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('scroll', scrollHandler)
      rAF.current = requestAnimationFrame(animate)

      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('scroll', scrollHandler)
        if (rAF.current) cancelAnimationFrame(rAF.current)
      }
    },
    { scope: containerRef },
  )

  return (
    <div ref={containerRef} className='relative -z-10 overflow-hidden'>
      <div className='bg-2025-yellow fixed inset-0 scale-105'>
        <div className='absolute inset-0 -z-20 aspect-square w-screen overflow-hidden rounded-full bg-[#ffebd2]' />
        <Image
          ref={layerCityRef}
          src='/sections/festivales/2025/images/city.png'
          alt='Imágen de la ciudad de coquimbo destruída por un frijol maligno'
          width={2100}
          height={1313}
          className='absolute right-0 -bottom-[30rem] left-0 -z-15 ease-in-out'
        />
        <Image
          src='/sections/festivales/2025/images/ground.png'
          ref={layerGroundRef}
          alt='Imágen del suelo de coquimbo destruído por un frijol maligno'
          width={1920}
          height={971}
          className='absolute right-0 -bottom-[40rem] left-0 -z-10 ease-in-out'
        />
        <Image
          src='/sections/festivales/2025/images/rock-center.png'
          ref={layerRockCenterRef}
          alt='Imágen de la roca central de coquimbo destruída por un frijol maligno'
          width={186}
          height={339}
          className='absolute top-1/2 right-0 left-0 -z-5 mx-auto ease-in-out'
        />
        <Image
          src='/sections/festivales/2025/images/rock-left.png'
          alt='Imágen de la roca izquierda de coquimbo destruída por un frijol maligno'
          ref={layerRockLeftRef}
          width={498}
          height={574}
          className='absolute top-0 left-0 -z-5 ease-in-out'
        />
        <Image
          src='/sections/festivales/2025/images/rock-right.png'
          alt='Imágen de la roca derecha de coquimbo destruída por un frijol maligno'
          ref={layerRockRightRef}
          width={333}
          height={430}
          className='absolute top-0 right-0 -z-5 ease-in-out'
        />
      </div>
    </div>
  )
}
