import { Confetti } from '@/components/Confetti'
import { Header } from '@/components/Header'
import { SelectedArtist } from '@/types/artists'
import { useArtistsData } from '@/hooks/useArtistsData'
import { CatalogError } from '@/components/catalog/CatalogError'
import siteData from '@/data/site.json'

const { selected_artists } = siteData

export const metadata = {
  title: selected_artists.seo.title,
  description: selected_artists.seo.description,
}

export default async function ParticipantesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header
        title={selected_artists.title}
        subTitle={selected_artists.subtitle}
        description={selected_artists.description}
      />
      <main className='size-full'>{children}</main>
      <Confetti />
    </>
  )
}
