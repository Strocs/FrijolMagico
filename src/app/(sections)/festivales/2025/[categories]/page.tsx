import { Metadata } from 'next'
import { unstable_ViewTransition as ViewTransition } from 'react'
import siteData from '@/data/site.json'
import { ErrorSection } from '@/components/ErrorSection'
import { normalizeString } from '@/lib/utils'
import { ApprovedArtistsPresentation } from '@/app/(sections)/festivales/2025/[categories]/components/ApprovedArtistsPresentation'
import { ApprovedArtistsCategoriesNav } from '@/app/(sections)/festivales/2025/[categories]/components/ApprovedArtistsCategoriesNav'
import { Header } from '@/components/Header'
import { getApprovedArtistsData } from './lib/getApprovedArtistsData'
import { SectionHomeButton } from '@/components/SectionsHomeButton'

type CategoryParams = {
  categories: keyof typeof siteData.selected_artists.seo.category
}

export default async function ApprovedArtistsPage({
  params,
}: {
  params: Promise<CategoryParams>
}) {
  const { data, success, error } = await getApprovedArtistsData()

  const groupedArtists = Object.groupBy(data || [], ({ work_area }) =>
    normalizeString(work_area),
  )

  const { categories } = await params
  const artistsByCategory = groupedArtists[categories]

  return (
    <>
      <Header
        title={siteData.selected_artists.title}
        subTitle={siteData.selected_artists.subtitle}
        fontFamily={{
          titleClass: 'font-superfortress',
          subTitleClass: 'font-superfortress',
        }}
        textColor={{
          titleClass: 'text-2025-white',
        }}
        fontSize={{
          titleClass: 'text-4xl sm:text-6xl',
          subTitleClass: 'text-3xl',
        }}
        doodleColor='text-2025-white'
      />
      <main className={`relative container mx-auto h-full pt-8`}>
        <ViewTransition name='transition-logo'>
          <SectionHomeButton />
        </ViewTransition>
        {!success && error ? (
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
