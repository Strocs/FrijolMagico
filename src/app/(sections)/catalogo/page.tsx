import { CatalogProvider } from './contexts/CatalogContext'
import { CatalogPanel } from './components/CatalogPanel'
import { Header } from '@/components/Header'
import { CatalogSearchBar } from './components/CatalogSearchBar'
import { CatalogList } from './components/CatalogList'
import { ErrorSection } from '@/components/ErrorSection'
import { CatalogFilterBar } from './components/CatalogFilterBar'
import { getCatalogDataByEnv } from './services/catalogService'
import siteData from '@/data/site.json'
import { LogoHomeLink } from '@/components/LogoHomeLink'
import { unstable_ViewTransition as ViewTransition } from 'react'
import { CatalogFiltersProvider } from './contexts/CatalogFiltersContext'

const { catalog } = siteData

export const metadata = {
  title: catalog.seo.title,
  description: catalog.seo.description,
}

export default async function CatalogPage() {
  const { data: catalogData, error } = await getCatalogDataByEnv()

  if (!catalogData) {
    return (
      <ErrorSection
        error={
          error || 'Error al cargar el catálogo. Por favor, intente nuevamente.'
        }
      />
    )
  }

  return (
    <CatalogFiltersProvider>
      <CatalogProvider>
        <ViewTransition name='transition-logo'>
          <div className='fixed right-0 bottom-2 scale-75'>
            <LogoHomeLink />
          </div>
        </ViewTransition>
        <Header title={catalog.title} description={catalog.description} />
        <main className='container mx-auto px-4 py-8'>
          {/* Search and Filter Section */}
          <section className='flex flex-col items-center justify-center gap-4 pb-6 sm:flex-row'>
            <CatalogSearchBar />
            <CatalogFilterBar catalogData={catalogData} />
          </section>
          <CatalogList catalog={catalogData} />
        </main>
        <CatalogPanel />
      </CatalogProvider>
    </CatalogFiltersProvider>
  )
}
