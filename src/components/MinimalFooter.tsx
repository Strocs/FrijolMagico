import Link from 'next/link'
import { BackToTop } from './BackToTop'

export const MinimalFooter = () => {
  return (
    <footer className='absolute right-0 bottom-0 left-0 z-50 flex items-center justify-center gap-4 py-4 not-landscape:flex-wrap'>
      <BackToTop />

      <div className='bg-2025-orange/80 rounded-2xl px-4'>
        <p className='font-josefin text-2025-white -mb-1.5 pt-1.5 text-center text-lg leading-none font-black'>
          Frijol Mágico{' '}
          <span className='text-2025-yellow'>{new Date().getFullYear()} </span>
          🌱
        </p>
        <Link
          href='https://github.com/Strocs'
          className='hover:text-2025-yellow text-2025-white text-center text-sm leading-none transition duration-150'>
          Desarrollado con ❤ por StrocsDev
        </Link>
      </div>
    </footer>
  )
}
