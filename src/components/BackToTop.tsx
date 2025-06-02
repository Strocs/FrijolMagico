'use client'
import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const listener = () => {
      const scrollPercent =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100

      setVisible((prevVisible) => {
        if (scrollPercent > 20 && !prevVisible) {
          return true
        } else if (scrollPercent <= 20 && prevVisible) {
          return false
        }
        return prevVisible
      })
    }

    window.addEventListener('scroll', listener)

    return () => {
      window.removeEventListener('scroll', listener)
    }
  }, [])

  function handleOnClick() {
    if (!visible) return
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      aria-label='Navegar hacia arriba'
      className={`${
        visible ? 'cursor-pointer opacity-100' : 'cursor-default opacity-0'
      } bg-fm-orange text-fm-white transition-150 fixed bottom-4 left-4 z-50 aspect-square w-10 transform-gpu rounded-full transition-[transform,opacity] hover:scale-105`}
      onClick={handleOnClick}>
      <ArrowUp className='mx-auto' />
    </button>
  )
}
