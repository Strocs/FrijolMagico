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

  const handleScrollDown = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
    })
  }

  return (
    <div
      hidden
      ref={ref}
      className='font-superfortress pointer-events-none fixed right-0 bottom-1/4 left-0 z-50 mx-auto flex w-fit flex-col items-center gap-1 transition-opacity duration-500 not-landscape:bottom-16 2xl:bottom-1/3'>
      <div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='stroke-2025-yellow pointer-events-none mx-auto size-20 animate-bounce sm:size-24'
          viewBox='0 0 24 24'
          fill='none'
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'>
          <path d='M12 5v14m7-7l-7 7-7-7' />
        </svg>
        <span className='text-stroke-3 text-stroke-2025-white text-2025-orange pointer-events-none w-full max-w-[180px] text-center text-lg leading-none [paint-order:stroke_fill] sm:max-w-full'>
          Scroll para revelar
        </span>
        <span className='text-2025-white pointer-events-none block text-center'>
          o
        </span>
      </div>

      <button
        type='button'
        onClick={handleScrollDown}
        className='bg-2025-orange text-2025-white hover:bg-2025-white hover:text-2025-orange pointer-events-auto cursor-pointer rounded-lg px-3 text-lg transition-colors'>
        <p className='-mb-0.5 pt-0.5'>Ver todos ahora</p>
      </button>
    </div>
  )
}
