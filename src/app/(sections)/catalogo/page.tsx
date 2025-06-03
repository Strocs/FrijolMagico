import { getCatalogData } from '@/lib/catalog'
import { CatalogProvider } from '@/contexts/CatalogContext'
import { CatalogPanel } from '@/components/catalog/CatalogPanel'
import { Header } from '@/components/Header'
import siteData from '@/data/site.json'
import { CatalogSearchBar } from '@/components/catalog/CatalogSearchBar'
import { CatalogList } from '@/components/catalog/CatalogList'
import { CatalogError } from '@/components/catalog/CatalogError'
import { CatalogFilterBar } from '@/components/catalog/CatalogFilterBar'

const { catalog } = siteData

export default async function CatalogPage() {
  let catalogData
  let error = null

  try {
    // In production, use the real data
    if (process.env.NODE_ENV === 'production') {
      catalogData = await getCatalogData()
    } else {
      // In development, use mock data
      const { getMockCatalogData } = await import('@/lib/catalog')
      catalogData = getMockCatalogData()

      // Simulate network delay in development
      await new Promise((resolve) => setTimeout(resolve, 500))
    }
  } catch (err) {
    console.error('Error fetching catalog data:', err)
    error = 'Error al cargar el catálogo. Por favor, intente nuevamente.'
  }

  if (!catalogData) {
    return <CatalogError error={error || ''} />
  }

  return (
    <>
      <Header title={catalog.title} description={catalog.description} />
      <CatalogProvider>
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
    </>
  )
}
