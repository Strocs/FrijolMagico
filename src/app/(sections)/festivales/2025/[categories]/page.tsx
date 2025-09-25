import { Metadata } from 'next'
import { unstable_ViewTransition as ViewTransition } from 'react'
import siteData from '@/data/site.json'
import { ErrorSection } from '@/components/ErrorSection'
import { normalizeString } from '@/utils/utils'
import { ApprovedArtistsPresentation } from '@/app/(sections)/festivales/2025/[categories]/components/ApprovedArtistsPresentation'
import { ApprovedArtistsCategoriesNav } from '@/app/(sections)/festivales/2025/[categories]/components/ApprovedArtistsCategoriesNav'
import { getApprovedArtistsData } from './lib/getApprovedArtistsData'
import { SectionHomeButton } from '@/components/SectionsHomeButton'
import { FestivalHeader } from '../components/FestivalHeader'

type CategoryParams = {
  categories: keyof typeof siteData.selected_artists.seo.category
}

export default async function ApprovedArtistsPage({
  params,
}: {
  params: Promise<CategoryParams>
}) {
  const { data, error } = await getApprovedArtistsData()

  const groupedArtists = Object.groupBy(data || [], ({ category }) =>
    normalizeString(category),
  )

  const { categories } = await params
  const artistsByCategory = groupedArtists[categories]

  return (
    <>
      <FestivalHeader
        title={siteData.selected_artists.title}
        subTitle={siteData.selected_artists.subtitle}
      />
      <main className={`relative container mx-auto h-full pt-8`}>
        <ViewTransition name='transition-logo'>
          <SectionHomeButton />
        </ViewTransition>
        {error ? (
          <ErrorSection error={error.message} />
        ) : (
          <>
            <ApprovedArtistsCategoriesNav currentCategory={categories} />
            <ApprovedArtistsPresentation
              artists={artistsByCategory || []}
              key={categories}
            />
          </>
        )}
      </main>
    </>
  )
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
