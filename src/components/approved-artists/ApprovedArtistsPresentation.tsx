'use client'

import { formatUrl } from '@/lib/utils'
import { ApprovedArtist } from '@/types/artists'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

export const ApprovedArtistsPresentation = ({
  artists,
}: {
  artists: ApprovedArtist[]
}) => {
  // TODO: apply gsap animation to artists presentation
  const container = useRef<HTMLUListElement>(null)

  useGSAP(
    () => {
      const artistsList = gsap.utils.toArray<HTMLLIElement>('.artist-name')

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top 20%',
          end: '+=3000',
          scrub: true,
          pin: true,
          markers: true,
        },
      })

      artistsList.forEach((artist) => {
        tl.from(artist, {
          opacity: 0,
          y: gsap.utils.random(40, 100),
          x: gsap.utils.random(-200, 200),
          rotationZ: gsap.utils.random(-10, 10),
          scale: gsap.utils.random(0.5, 1),
          duration: 1.2,
          ease: 'power2.out',
        })
      })
    },
    { scope: container },
  )
  return (
    <section ref={container} className='container mx-auto max-w-6xl'>
      <ul className='flex flex-wrap items-center justify-center gap-x-2 gap-y-1 pb-40'>
        {artists.map((artist) => (
          <li
            key={artist.id}
            className='artist-name bg-fm-white/40 rounded-lg px-2'>
            <a
              href={formatUrl(artist.rrss)}
              target='_blank'
              rel='noopener noreferrer'
              className='font-noto text-fm-white text-stroke-1 text-stroke-fm-dark text-4xl font-black'>
              {artist.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
