import Image from 'next/image'
import Link from 'next/link'

export const LogoHomeLink = () => {
  return (
    <Link
      href='/'
      target='_self'
      className='group relative z-50 m-auto block size-fit'>
      <span className='font-noto text-fm-orange absolute -top-2 right-0 left-0 mx-auto rotate-[32deg] text-center font-bold opacity-0 transition-opacity duration-100 group-hover:opacity-100'>
        Inicio
      </span>
      <Image
        src='/frijol.png'
        loading='eager'
        alt='Logo Frijol Mágico'
        width={120}
        height={120}
        className='transition duration-200 group-hover:rotate-6'
      />
    </Link>
  )
}
