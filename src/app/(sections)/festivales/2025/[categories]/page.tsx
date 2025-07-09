import { Metadata } from 'next'
import { unstable_ViewTransition as ViewTransition } from 'react'
import siteData from '@/data/site.json'
import { ErrorSection } from '@/components/ErrorSection'
import { normalizeString } from '@/lib/utils'
import { ApprovedArtistsPresentation } from '@/app/(sections)/festivales/2025/[categories]/components/ApprovedArtistsPresentation'
import { ApprovedArtistsCategoriesNav } from '@/app/(sections)/festivales/2025/[categories]/components/ApprovedArtistsCategoriesNav'
import { LogoHomeLink } from '@/components/LogoHomeLink'
import { Header } from '@/components/Header'
import { getApprovedArtistsDataByEnv } from './services/approvedArtistsService'

type CategoryParams = {
  categories: keyof typeof siteData.selected_artists.seo.category
}

export default async function ApprovedArtistsPage({
  params,
}: {
  params: Promise<CategoryParams>
}) {
  const { data, success, error } = await getApprovedArtistsDataByEnv()

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
      />
      <main className={`relative container mx-auto h-full px-4 py-8`}>
        <ViewTransition name='transition-logo'>
          <div className='fixed right-0 bottom-2 z-100 scale-75'>
            <LogoHomeLink />
          </div>
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
