import Link from 'next/link'
import siteData from '@/data/site.json'
import { cn, normalizeString } from '@/utils/utils'
import { paths } from '@/config/paths'

export const ApprovedArtistsCategoriesNav = ({
  currentCategory,
}: {
  currentCategory: string
}) => {
  const categoriesList = siteData.selected_artists.categories
  return (
    <nav className='sticky top-8 z-50 flex flex-wrap items-center justify-center gap-2 md:gap-8'>
      {categoriesList.map((category) => (
        <Link
          key={category}
          className={cn(
            'font-superfortress bg-2025-white text-2025-orange outline-2025-orange rounded-lg px-4 py-1 leading-none font-light outline transition duration-300 outline-dashed md:px-6 md:text-xl md:hover:scale-105',
            {
              'bg-2025-orange text-fm-white outline-none md:scale-110':
                normalizeString(category) === currentCategory,
            },
          )}
          href={
            paths.festival[2025][
              normalizeString(category) as
                | 'ilustracion'
                | 'manualidades'
                | 'narrativagrafica'
            ]
          }
          aria-label={`Ir a la categoría ${category}`}>
          {category}
        </Link>
      ))}
    </nav>
  )
}
