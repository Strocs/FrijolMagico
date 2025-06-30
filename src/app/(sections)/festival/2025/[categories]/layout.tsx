import { ApprovedArtistsCategoriesNav } from '@/components/approved-artists/ApprovedArtistsCategoriesNav'
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

      <main className='sticky top-0 container mx-auto h-[100vh] px-4 py-8'>
        <ApprovedArtistsCategoriesNav />
        {children}
      </main>
    </>
  )
}
