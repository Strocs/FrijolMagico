import { CatalogProvider } from '@/contexts/CatalogContext'
import { CatalogPanel } from '@/components/catalog/CatalogPanel'
import { Header } from '@/components/Header'
import { CatalogSearchBar } from '@/components/catalog/CatalogSearchBar'
import { CatalogList } from '@/components/catalog/CatalogList'
import { CatalogError } from '@/components/catalog/CatalogError'
import { CatalogFilterBar } from '@/components/catalog/CatalogFilterBar'
import { useArtistsData } from '@/hooks/useArtistsData'
import { CatalogArtist } from '@/types/artists'
import siteData from '@/data/site.json'

const { catalog } = siteData

export default async function CatalogPage() {
  const { data: catalogData, error } =
    await useArtistsData<CatalogArtist>('catalog')

  if (!catalogData) {
    return (
      <CatalogError
        error={
          error || 'Error al cargar el catálogo. Por favor, intente nuevamente.'
        }
      />
    )
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
