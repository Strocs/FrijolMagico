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
  const scrollIconRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const artistsList = gsap.utils.toArray<HTMLLIElement>('.approved-artist')

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top 10%',
          end: () => `+=${(container.current?.offsetHeight || 500) * 8}`,
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
    { scope: container },
  )

  return (
    <>
      <div
        ref={scrollIconRef}
        className='fixed right-0 bottom-1/4 left-0 z-0 mx-auto flex w-fit flex-col items-center transition-opacity duration-500 not-landscape:bottom-4 2xl:bottom-1/3'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='stroke-2025-white size-20 animate-bounce sm:size-24'
          viewBox='0 0 24 24'
          fill='none'
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'>
          <path d='M12 5v14m7-7l-7 7-7-7' />
        </svg>
        <span className='font-superfortress text-stroke-3 text-stroke-2025-white text-2025-orange w-full max-w-[180px] text-center leading-none [paint-order:stroke_fill] sm:max-w-full sm:text-xl'>
          Scroll para revelar a lxs artistas seleccionados
        </span>
      </div>

      <section
        ref={container}
        className='container grid h-full place-items-center overflow-x-clip pt-20'>
        <ul className='flex h-min flex-wrap justify-center sm:gap-x-2 sm:pb-54'>
          {artists.map((artist) => (
            <li
              key={artist.id}
              className='approved-artist group pointer-events-none rounded-lg px-2 text-center'>
              <a
                href={formatUrl(artist.rrss)}
                target='_blank'
                rel='noopener noreferrer'
                className='font-superfortress text-2025-orange text-stroke-2025-white text-stroke-3 2xl:text-stroke-6 group-hover:text-2025-pink hover:text-2025-pink lg:text-stroke-5 inline-block text-lg leading-none transition-colors duration-300 ease-in-out [paint-order:stroke_fill] lg:text-4xl 2xl:text-5xl'>
                {artist.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
