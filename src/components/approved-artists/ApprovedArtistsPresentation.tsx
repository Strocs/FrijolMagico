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
          start: 'top 20%',
          end: () => `+=${(container.current?.offsetHeight || 0) + 3000}`,
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
    <section ref={container} className='container mx-auto overflow-x-hidden'>
      <ul className='flex flex-wrap items-center justify-center gap-x-2 pb-40'>
        {artists.map((artist) => (
          <li key={artist.id} className='artist-name rounded-lg px-2'>
            <a
              href={formatUrl(artist.rrss)}
              target='_blank'
              rel='noopener noreferrer'
              className='font-noto text-fm-black text-stroke-1 text-stroke-fm-dark text-5xl font-black'>
              {artist.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
