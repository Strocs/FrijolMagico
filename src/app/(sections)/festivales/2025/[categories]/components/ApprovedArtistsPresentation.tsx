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
  const container = useRef<HTMLUListElement>(null)

  useGSAP(
    () => {
      const artistsList = gsap.utils.toArray<HTMLLIElement>('.artist-name')

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top 15%',
          end: () => `+=${(container.current?.offsetHeight || 500) * 6}`,
          scrub: true,
          pin: true,
          pinSpacing: true,
        },
      })

      artistsList.forEach((artist) => {
        tl.from(artist, {
          opacity: 0,
          y: gsap.utils.random(-150, -50),
          x: gsap.utils.random(-300, 300),
          rotationZ: gsap.utils.random(-45, 45),
          scale: gsap.utils.random(0.1, 0.3),
          skewX: gsap.utils.random(-20, 20),
          skewY: gsap.utils.random(-10, 10),
          filter: 'blur(5px)',
          ease: 'power3.out',
        })
      })
    },
    { scope: container },
  )
  return (
    <section
      ref={container}
      className='container grid h-full place-items-center py-20'>
      <ul className='flex h-min flex-wrap justify-center gap-2'>
        {artists.map((artist) => (
          <li key={artist.id} className='artist-name rounded-lg px-2'>
            <a
              href={formatUrl(artist.rrss)}
              target='_blank'
              rel='noopener noreferrer'
              className='font-superfortress text-2025-orange text-stroke-fm-white text-stroke-5 text-lg [paint-order:stroke_fill] md:text-4xl'>
              {artist.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
