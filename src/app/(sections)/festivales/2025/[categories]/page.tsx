import { Metadata } from 'next'
import { CatalogError } from '@/components/catalog/CatalogError'
import { SelectedArtist } from '@/types/artists'
import { normalizeString } from '@/lib/utils'
import { ApprovedArtistsPresentation } from '@/components/approved-artists/ApprovedArtistsPresentation'
import { fetchArtistsData } from '@/services/artistService'
import { ApprovedArtistsCategoriesNav } from '@/components/approved-artists/ApprovedArtistsCategoriesNav'
import siteData from '@/data/site.json'
import { LogoHomeLink } from '@/components/LogoHomeLink'
import { unstable_ViewTransition as ViewTransition } from 'react'

export async function generateMetadata({
  params,
}: {
  params: { categories: string }
}): Promise<Metadata> {
  const category = params.categories

  return {
    title:
      siteData.selected_artists.seo.category[
        category as keyof typeof siteData.selected_artists.seo.category
      ].title,
    description:
      siteData.selected_artists.seo.category[
        category as keyof typeof siteData.selected_artists.seo.category
      ].description,
  }
}

export async function generateStaticParams() {
  return siteData.selected_artists.categories.map((category) => ({
    categories: normalizeString(category),
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
    normalizeString(work_area),
  )

  const { categories } = await params

  const artists = groupedArtists[categories] || []

  return (
    <>
      {artists.length === 0 ? (
        <CatalogError
          error={
            'Ocurrió un error al cargar los artistas seleccionados. Por favor, intente nuevamente.'
          }
        />
      ) : (
        <>
          <ViewTransition name='transition-logo'>
            <div className='fixed right-0 bottom-2 scale-75'>
              <LogoHomeLink />
            </div>
          </ViewTransition>
          <ApprovedArtistsCategoriesNav currentCategory={categories} />
          <ApprovedArtistsPresentation artists={artists} />
        </>
      )}
    </>
  )
}
