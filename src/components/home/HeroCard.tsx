import Image from 'next/image'

export const HeroCard = () => {
  return (
    <section className='relative flex size-full h-full items-center justify-center overflow-hidden rounded-2xl sm:h-48'>
      <Image
        src='/enredadera.png'
        alt='Enredadera'
        width={800}
        height={800}
        className='absolute bottom-0 -left-10 aspect-square w-full scale-125 sm:-bottom-20'
      />
      <video
        autoPlay
        loop
        muted
        playsInline
        preload='none'
        width={570}
        height={321}
        className='absolute inset-0 -z-10 aspect-video scale-125 sm:scale-100'>
        <source src='/FestivalFrijolMagico.webm' type='video/webm' />
        <Image
          src='/FestivalFrijolMagico.png'
          alt='Festival Frijol Mágico'
          width={570}
          height={321}
        />
      </video>
      <h1 className='text-fm-white font-josefin text-center text-4xl leading-none font-black tracking-tighter text-wrap uppercase sm:text-6xl'>
        <span className='text-2xl sm:text-5xl'>Festival</span>
        <br /> Frijol Mágico
      </h1>
    </section>
  )
}
