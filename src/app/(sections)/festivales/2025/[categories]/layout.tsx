import { Header } from '@/components/Header'
import siteData from '@/data/site.json'
// import Image from 'next/image'

const { selected_artists } = siteData

export default function ApprovedArtistsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header
        title={selected_artists.title}
        subTitle={selected_artists.subtitle}
      />
      {/* <Image
        src='/temp.jpeg'
        alt='Festivales 2025'
        width={1920}
        height={1080}
        className='fixed -top-1/2 right-0 left-0 -z-10'
      /> */}
      <main className='relative container mx-auto h-full px-4 py-8'>
        {children}
      </main>
    </>
  )
}
