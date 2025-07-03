import { Metadata } from 'next'
import { unstable_ViewTransition as ViewTransition } from 'react'
import siteData from '@/data/site.json'
import { CatalogError } from '@/components/catalog/CatalogError'
import { ApprovedArtist } from '@/types/artists'
import { normalizeString } from '@/lib/utils'
import { ApprovedArtistsPresentation } from '@/components/approved-artists/ApprovedArtistsPresentation'
import { fetchArtistsData } from '@/services/artistService'
import { ApprovedArtistsCategoriesNav } from '@/components/approved-artists/ApprovedArtistsCategoriesNav'
import { LogoHomeLink } from '@/components/LogoHomeLink'

type CategoryParams = {
  categories: keyof typeof siteData.selected_artists.seo.category
}

export async function generateMetadata({
  params,
}: {
  params: Promise<CategoryParams>
}): Promise<Metadata> {
  const { categories } = await params

  return {
    title: siteData.selected_artists.seo.category[categories].title,
    description: siteData.selected_artists.seo.category[categories].description,
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
  params: Promise<CategoryParams>
}) {
  const { data: approvedArtistsData, error } =
    await fetchArtistsData<ApprovedArtist>('approvedArtists')

  if (!approvedArtistsData) {
    return (
      <CatalogError
        error={
          error ||
          'Error al cargar los artistas seleccionados. Por favor, intente nuevamente.'
        }
      />
    )
  }

  const groupedArtists = Object.groupBy(approvedArtistsData, ({ work_area }) =>
    normalizeString(work_area),
  )

  const { categories } = await params

  const artists = groupedArtists[categories] || []

  if (artists.length === 0) {
    return (
      <CatalogError
        error={
          'Ocurrió un error al cargar los artistas seleccionados. Por favor, intente nuevamente.'
        }
      />
    )
  }

  return (
    <>
      <ViewTransition name='transition-logo'>
        <div className='fixed right-0 bottom-2 scale-75'>
          <LogoHomeLink />
        </div>
      </ViewTransition>
      <ApprovedArtistsCategoriesNav currentCategory={categories} />
      <ApprovedArtistsPresentation artists={artists} key={categories} />
    </>
  )
}
