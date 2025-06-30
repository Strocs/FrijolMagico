import { CatalogError } from '@/components/catalog/CatalogError'
import { SelectedArtist } from '@/types/artists'
import { normalizeString } from '@/utils/catalog'
import siteData from '@/data/site.json'
import { ApprovedArtistsPresentation } from '@/components/approved-artists/ApprovedArtistsPresentation'
import { fetchArtistsData } from '@/services/artistService'

export const metadata = {
  title: 'selección ilustración',
}

export async function generateStaticParams() {
  return siteData.selected_artists.categories.map((category) => ({
    categories: normalizeString(category).replaceAll(' ', '-'),
  }))
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categories: string }>
}) {
  const { data: selectedArtistsData, error } =
    await fetchArtistsData<SelectedArtist>('selectedArtists')

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

  const groupedArtists = Object.groupBy(selectedArtistsData, ({ work_area }) =>
    normalizeString(work_area).replaceAll(' ', '-'),
  )

  const { categories } = await params

  const artists = groupedArtists[categories] || []

  return (
    <>
      <ApprovedArtistsPresentation artists={artists} />
    </>
  )
}
