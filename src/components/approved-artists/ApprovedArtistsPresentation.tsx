'use client'

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
          {artist.name}
        </li>
      ))}
    </ul>
  )
}
