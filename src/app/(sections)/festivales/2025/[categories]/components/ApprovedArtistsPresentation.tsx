'use client'

import { formatUrl } from '@/lib/utils'
import { ApprovedArtist } from '@/types/artists'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ApprovedArtistsScrollDownSignal } from './ApprovedArtistsScrollDownSignal'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

export const ApprovedArtistsPresentation = ({
  artists,
}: {
  artists: ApprovedArtist[]
}) => {
  const containerRef = useRef<HTMLUListElement>(null)
  const scrollIconRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const artistsList = gsap.utils.toArray<HTMLLIElement>('.approved-artist')

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 10%',
          end: () => `+=${(containerRef.current?.offsetHeight || 500) * 8}`,
          scrub: true,
          pin: true,
          onEnter: () => {
            if (scrollIconRef.current) {
              scrollIconRef.current.classList.add('opacity-0')
            }
          },
          onLeaveBack: () => {
            if (scrollIconRef.current) {
              scrollIconRef.current.classList.remove('opacity-0')
            }
          },
        },
      })

      artistsList.forEach((artist) => {
        tl.from(artist, {
          opacity: 0,
          y: gsap.utils.random(-150, -50),
          x: gsap.utils.random(-300, 300),
          rotationZ: gsap.utils.random(-45, 45),
          ease: 'power1.inOut',
          onReverseComplete: () => {
            artist.classList.add('pointer-events-none')
          },
          onComplete: () => {
            artist.classList.remove('pointer-events-none')
          },
        })
      })
    },
    { scope: containerRef },
  )

  return (
    <>
      <ApprovedArtistsScrollDownSignal ref={scrollIconRef} />
      <section
        ref={containerRef}
        className='container grid h-full place-items-center overflow-x-clip pt-20'>
        <ul className='flex h-full min-h-[50dvh] flex-wrap content-center justify-center min-[1920px]:min-h-[80dvh] sm:gap-x-2 xl:pb-54'>
          {artists.map((artist) => (
            <li
              key={artist.id}
              className='approved-artist group pointer-events-none rounded-lg px-2 text-center'>
              <a
                href={formatUrl(artist.rrss)}
                target='_blank'
                rel='noopener noreferrer'
                className='font-superfortress text-2025-orange text-stroke-2025-white text-stroke-3 2xl:text-stroke-6 group-hover:text-2025-pink hover:text-2025-pink lg:text-stroke-5 inline-block text-lg leading-none transition-colors duration-300 ease-in-out [paint-order:stroke_fill] md:text-4xl lg:text-5xl 2xl:text-5xl'>
                {artist.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
