import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { LogoHomeLink } from '@/components/LogoHomeLink'
import { ViewTransition } from 'react'

export default function NotFound() {
  return (
    <>
      <ViewTransition name='transition-logo'>
        <div className='fixed right-0 bottom-2 scale-75'>
          <LogoHomeLink />
        </div>
      </ViewTransition>
      <Header title='# 404' subTitle='## Página no encontrada' />
      <main className='flex h-full flex-col items-center justify-center p-4 text-center'>
        <p className='text-fm-dark/80 text-lg'>
          <strong>QUÉ BUSCABAS REALMENTE?</strong> ACÁ NO HAY NADA QUE VER, LE
          SOLICITO QUE VUELVA EN OTRO MOMENTO{' '}
          <i>(Seguramente la página está en construcción u.u)</i>
        </p>
        <LogoHomeLink />
      </main>
      <Footer />
    </>
  )
}
