import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function NotFound() {
  return (
    <>
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
