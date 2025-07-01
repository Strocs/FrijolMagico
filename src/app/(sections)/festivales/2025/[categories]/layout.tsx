import { Header } from '@/components/Header'
import siteData from '@/data/site.json'

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
      <main className='container mx-auto h-full px-4 py-8'>{children}</main>
    </>
  )
}
