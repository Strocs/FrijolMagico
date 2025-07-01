'use client'

import { formatUrl } from '@/lib/utils'
import { SelectedArtist } from '@/types/artists'

export const ApprovedArtistsPresentation = ({
  artists,
}: {
  artists: SelectedArtist[]
}) => {
  // TODO: apply gsap animation to artists presentation
  return (
    <ul className='mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 py-20'>
      {artists.map((artist) => (
        <li
          key={artist.id}
          className='font-josefin text-6xl leading-none font-black'>
          <a
            href={formatUrl(artist.rrss)}
            target='_blank'
            rel='noopener noreferrer'>
            {artist.name}
          </a>
        </li>
      ))}
    </ul>
  )
}
