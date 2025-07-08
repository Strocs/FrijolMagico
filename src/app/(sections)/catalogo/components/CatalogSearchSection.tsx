import { CatalogArtist } from '@/types/artists'
import { CatalogSearchBar } from './CatalogSearchBar'
import { CatalogFilterBar } from './CatalogFilterBar'

export const CatalogSearchSection = ({
  catalogData,
}: {
  catalogData: CatalogArtist[]
}) => {
  return (
    <section className='flex w-full flex-col justify-center gap-4 pb-6 sm:flex-row'>
      <CatalogSearchBar />
      <CatalogFilterBar catalogData={catalogData} />
    </section>
  )
}
