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
      aria-label="Navegar hacia arriba"
      className={`${visible ? 'opacity-100 cursor-pointer' : 'opacity-0 cursor-default'} transition-[transform,opacity] fixed bottom-4 left-4 z-50 bg-secondary text-background hover:scale-105 transform-gpu transition-150 rounded-full w-10 aspect-square`}
      onClick={handleOnClick}>
      <ArrowUp className="mx-auto" />
    </button>
  )
}
