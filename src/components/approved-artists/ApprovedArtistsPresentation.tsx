'use client'

import { formatUrl } from '@/lib/utils'
import { SelectedArtist } from '@/types/artists'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

export const ApprovedArtistsPresentation = ({
  artists,
}: {
  artists: SelectedArtist[]
}) => {
  // TODO: apply gsap animation to artists presentation
  const container = useRef<HTMLUListElement>(null)

  useGSAP(
    () => {
      const artistsList = gsap.utils.toArray<HTMLLIElement>('.artist-name')

      artistsList.forEach((artist) => {
        gsap.from(artist, {
          y: gsap.utils.random(40, 100),
          x: gsap.utils.random(-200, 200),
          opacity: 0,
          duration: 5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: artist,
            start: 'center 70%',
            end: 'top 60%',
            scrub: true,
            markers: true, // Uncomment for debugging
          },
        })
      })
    },
    { scope: container },
  )
  return (
    <section
      ref={container}
      className='container mx-auto grid h-full max-w-6xl place-items-center py-20'>
      <ul className='flex flex-wrap items-center justify-center gap-x-12 py-20'>
        {artists.map((artist) => (
          <li
            key={artist.id}
            className='artist-name font-josefin text-fm-white stroke-fm-black stroke-2 text-6xl leading-none font-black [text-shadow:0_0_1rem_#000000]'>
            <a
              href={formatUrl(artist.rrss)}
              target='_blank'
              rel='noopener noreferrer'>
              {artist.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
