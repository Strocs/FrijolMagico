'use client'
import { useEffect, useState } from 'react'
import { LogoHomeLink } from '@/components/LogoHomeLink'
import { cn } from '@/utils/utils'

export const SectionHomeButton = () => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight
      // Show button unless user is at the bottom (with 2px tolerance)
      const atBottom = windowHeight + scrollY >= docHeight - 2
      setVisible(!atBottom)
    }
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <div
      className={cn(
        'fixed right-0 bottom-2 z-100 scale-75 transition-all duration-500 ease-in-out',
        visible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-8 opacity-0',
      )}
      aria-hidden={!visible}>
      <LogoHomeLink />
    </div>
  )
}
