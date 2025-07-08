import Image from 'next/image'
import { DoodleLine } from '@/components/DoodleLine'

export const ApprovedArtistsCard = () => {
  return (
    <>
      <div className='group from-fm-black to-fm-dark text-fm-white relative block size-full rounded-2xl bg-gradient-to-tr'>
        <div className='relative size-full overflow-hidden px-4'>
          <Image
            src='/images/mano.png'
            alt='Ilustración de una mano indicando a los participantes del próximo festival'
            loading='eager'
            width={50}
            height={119}
            className='top-0 right-0 left-0 m-auto block rotate-180 transition duration-300'
          />

          <div className='flex flex-col items-center gap-6 pt-5 transition-[gap] duration-300 group-hover:gap-2 sm:justify-center'>
            <h2 className='text-center text-2xl sm:text-xl'>
              Pronto <br />
              <b className='font-black uppercase'>
                <span className='bg-fm-orange group-hover:bg-fm-orange block rounded-xl px-2 py-1 text-3xl transition duration-300 sm:bg-transparent'>
                  Selección 2025
                </span>
              </b>
            </h2>
            <p className='font-josefin text-center text-lg leading-none text-white/80 uppercase transition duration-300 group-hover:text-white'>
              Ilustración <br /> Manualidades <br /> Narrativa Gráfica
            </p>
          </div>
          <DoodleLine
            width='80%'
            loopCount={5}
            className='flex items-center justify-center'
          />
        </div>
      </div>
    </>
  )
}
