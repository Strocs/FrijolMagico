'use client'

import { formatUrl } from '@/utils/utils'
import { ApprovedArtist } from '../types'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ApprovedArtistsScrollDownSignal } from './ApprovedArtistsScrollDownSignal'

gsap.registerPlugin(useGSAP, ScrollTrigger)

interface ApprovedArtistsPresentationProps {
  artists: ApprovedArtist[]
}

export const ApprovedArtistsPresentation = ({
  artists,
}: ApprovedArtistsPresentationProps) => {
  const containerRef = useRef<HTMLUListElement>(null)
  const scrollIconRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const artistsList = gsap.utils.toArray<HTMLLIElement>('.approved-artist')
      const velocity = artists.length * 40

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${velocity}%`, // Adjust this value based on your layout
          // end: 'max',
          scrub: true,
          pin: true,
          pinSpacing: true,
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
          y: 100,
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
        className='container grid h-full min-h-screen place-items-center overflow-x-clip'>
        <ul className='flex h-full flex-wrap content-center justify-center sm:gap-x-2'>
          {artists.map((artist) => (
            <li
              key={artist.id}
              className='approved-artist group pointer-events-none rounded-lg px-2 text-center'>
              <a
                href={formatUrl(artist.rrss)}
                target='_blank'
                rel='noopener noreferrer'
                className='font-superfortress text-2025-orange text-stroke-2025-white text-stroke-3 2xl:text-stroke-6 group-hover:text-2025-pink hover:text-2025-pink lg:text-stroke-5 inline-block text-xl leading-none transition-colors duration-300 ease-in-out [paint-order:stroke_fill] md:text-4xl 2xl:text-5xl'>
                {artist.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
