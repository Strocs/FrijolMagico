import { CatalogPanel } from './components/CatalogPanel'
import { Header } from '@/components/Header'
import { CatalogList } from './components/CatalogList'
import { ErrorSection } from '@/components/ErrorSection'
import siteData from '@/data/site.json'
import { unstable_ViewTransition as ViewTransition } from 'react'
import { Suspense } from 'react'
import {
  CatalogCardLoader,
  CatalogSearchSectionLoader,
} from './components/CatalogSkeletonLoaders'
import { CatalogSearchSection } from './components/CatalogSearchSection'
import { CatalogFiltersInitializer } from './components/CatalogFiltersInitializer'
import { getCatalogData } from './lib/getCatalogData'
import { SectionHomeButton } from '@/components/SectionsHomeButton'

const { catalog } = siteData

export const metadata = {
  title: catalog.seo.title,
  description: catalog.seo.description,
}

export default async function CatalogPage() {
  const { data, error, success } = await getCatalogData()

  return (
    <>
      <ViewTransition name='transition-logo'>
        <SectionHomeButton />
      </ViewTransition>
      <Header title={catalog.title} description={catalog.description} />
      <main className='container mx-auto w-full px-4 py-8'>
        {/* Search and Filter Section */}
        <CatalogFiltersInitializer />
        {!success && error ? (
          <ErrorSection error={error.message} />
        ) : (
          <>
            <Suspense fallback={<CatalogSearchSectionLoader />}>
              <CatalogSearchSection catalogData={data || []} />
            </Suspense>
            <Suspense fallback={<CatalogCardLoader />}>
              <CatalogList catalog={data || []} />
            </Suspense>
          </>
        )}
      </main>
      <CatalogPanel catalogData={data || []} />
    </>
  )
}
