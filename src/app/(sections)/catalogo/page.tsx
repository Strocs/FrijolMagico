import { CatalogPanel } from './components/CatalogPanel'
import { Header } from '@/components/Header'
import { CatalogList } from './components/CatalogList'
import { ErrorSection } from '@/components/ErrorSection'
import { getCatalogDataByEnv } from './services/catalogService'
import siteData from '@/data/site.json'
import { LogoHomeLink } from '@/components/LogoHomeLink'
import { unstable_ViewTransition as ViewTransition } from 'react'
import { Suspense } from 'react'
import {
  CatalogCardLoader,
  CatalogSearchSectionLoader,
} from './components/CatalogSkeletonLoaders'
import { CatalogSearchSection } from './components/CatalogSearchSection'
import { CatalogFiltersInitializer } from './components/CatalogFiltersInitializer'

const { catalog } = siteData

export const metadata = {
  title: catalog.seo.title,
  description: catalog.seo.description,
}

export default async function CatalogPage() {
  const { data, error, success } = await getCatalogDataByEnv()

  return (
    <>
      <ViewTransition name='transition-logo'>
        <div className='fixed right-0 bottom-2 z-40 scale-75'>
          <LogoHomeLink />
        </div>
      </ViewTransition>
      <Header title={catalog.title} description={catalog.description} />
      <main className='container w-full py-8'>
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
      <CatalogPanel />
    </>
  )
}
