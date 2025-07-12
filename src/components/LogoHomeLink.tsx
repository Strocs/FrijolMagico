'use client'
import Image from 'next/image'
import Link from 'next/link'
import { paths } from '@/config/paths'
import { useEffect, useRef } from 'react'

export const LogoHomeLink = () => {
  const logoRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLBodyElement
      if (target.scrollHeight - target.scrollTop <= target.clientHeight) {
        //hide the logo when at the bottom
        logoRef.current?.classList.add('hidden')
      } else {
        //show the logo when not at the bottom
        logoRef.current?.classList.remove('hidden')
      }
    }

    document.body.addEventListener('scroll', handleScroll)

    return () => {
      document.body.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Link
      href={paths.home}
      ref={logoRef}
      target='_self'
      aria-label='Ir a la página de inicio'
      className='group relative m-auto block size-fit'>
      <span className='font-noto text-fm-white absolute -top-2 right-0 left-0 mx-auto rotate-[32deg] text-center font-bold opacity-0 mix-blend-difference transition-opacity duration-100 group-hover:opacity-100'>
        Inicio
      </span>
      <Image
        src='/images/frijol.png'
        loading='eager'
        alt='Logo Frijol Mágico'
        width={120}
        height={120}
        className='transition duration-200 group-hover:rotate-6'
      />
    </Link>
  )
}
