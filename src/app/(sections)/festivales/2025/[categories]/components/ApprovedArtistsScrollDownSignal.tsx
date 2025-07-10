'use client'

import { useEffect } from 'react'

interface ApprovedArtistsScrollDownSignalProps {
  ref: React.RefObject<HTMLDivElement | null> | null
}

export const ApprovedArtistsScrollDownSignal = ({
  ref,
}: ApprovedArtistsScrollDownSignalProps) => {
  useEffect(() => {
    if (!ref?.current) return
    ref.current.hidden = false
  }, [ref])

  return (
    <div
      ref={ref}
      hidden
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
  )
}
