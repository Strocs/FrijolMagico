import { CatalogError } from '@/components/catalog/CatalogError'
import { useArtistsData } from '@/hooks/useArtistsData'
import { SelectedArtist } from '@/types/artists'
import { normalizeString } from '@/utils/catalog'

export const metadata = {
  title: 'selección ilustración',
}

export async function generateStaticParams() {
  const categories = ['Ilustración', 'Narrativa Gráfica', 'Manualidades']
  return categories.map((category) => ({
    categories: normalizeString(category),
  }))
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categories: string }>
}) {
  const { data: selectedArtistsData, error } =
    await useArtistsData<SelectedArtist>('selectedArtists')

  console.log(selectedArtistsData)

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
    normalizeString(work_area),
  )

  const { categories } = await params

  const artists = groupedArtists[categories]
  return <>{JSON.stringify(artists)}</>
}
