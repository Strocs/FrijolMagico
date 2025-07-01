import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { unstable_ViewTransition as ViewTransition } from 'react'
import { LogoHomeLink } from '@/components/LogoHomeLink'

export default function NotFound() {
  return (
    <>
      <ViewTransition name='transition-logo'>
        <div className='fixed right-0 bottom-2 scale-75'>
          <LogoHomeLink />
        </div>
      </ViewTransition>
      <Header
        title='# 404'
        subTitle='## Página no encontrada'
        description='*QUÉ BUSCABAS REALMENTE?* ACÁ NO HAY NADA QUE VER, LE SOLICITO QUE VUELVA EN OTRO MOMENTO **(Seguramente la página está en construcción u.u)**'
      />
      <main className='flex h-full items-center justify-center'>
        <p></p>
      </main>
      <Footer />
    </>
  )
}
