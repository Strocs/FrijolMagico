import Link from 'next/link'
import { BackToTop } from './BackToTop'
import { paths } from '@/config/paths'

export const MinimalFooter = () => {
  return (
    <footer className='absolute right-0 bottom-0 left-0 z-50 flex items-center justify-center gap-4 py-4'>
      <BackToTop />

      <Link
        href={paths.home}
        className='bg-2025-orange text-2025-white hover:bg-2025-light block rounded-lg px-4 py-2 transition duration-150'>
        Volver al Inicio
      </Link>

      <div className='bg-2025-white rounded-lg px-4 text-center'>
        <p className='font-josefin text-2025-orange -mb-1.5 pt-1.5 text-lg leading-none font-black'>
          Frijol Mágico{' '}
          <span className='text-2025-green'>{new Date().getFullYear()} </span>
          🌱
        </p>
        <Link
          href='https://github.com/Strocs'
          className='hover:text-2025-green text-2025-orange text-center text-sm leading-none transition duration-150'>
          Desarrollado con ❤ por StrocsDev
        </Link>
      </div>

      <div></div>
    </footer>
  )
}
