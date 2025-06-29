import { Confetti } from '@/components/Confetti'
import { Header } from '@/components/Header'
import { SelectedArtist } from '@/types/artists'
import { useArtistsData } from '@/hooks/useArtistsData'
import { CatalogError } from '@/components/catalog/CatalogError'
import { SelectionLayout } from '@/components/selection/SelectionLayout'
import siteData from '@/data/site.json'

const { selected_artists } = siteData

export const metadata = {
  title: selected_artists.seo.title,
  description: selected_artists.seo.description,
}

export default async function ParticipantesPage() {
  const { data: selectedArtistsData, error } =
    await useArtistsData<SelectedArtist>('selectedArtists')

  if (!selectedArtistsData) {
    return (
      <CatalogError
        error={
          error ||
          'Error al cargar los artistas seleccionados. Por favor, intente nuevamente.'
        }
      />
    )
  }

  const {
    Ilustración: ilustrators,
    Manualidades: handcrafts,
    'Narrativa Gráfica': graphics,
  } = Object.groupBy(selectedArtistsData, (artist) => artist.work_area)

  return (
    <>
      <Header
        title={selected_artists.title}
        subTitle={selected_artists.subtitle}
        description={selected_artists.description}
      />
      <main className='size-full'>
        <SelectionLayout list={selectedArtistsData} />
      </main>
      <Confetti />
    </>
  )
}
