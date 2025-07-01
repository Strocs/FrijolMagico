import Link from 'next/link'
import siteData from '@/data/site.json'
import { cn, normalizeString } from '@/lib/utils'
import { paths } from '@/config/paths'

export const ApprovedArtistsCategoriesNav = ({
  currentCategory,
}: {
  currentCategory: string
}) => {
  const categoriesList = siteData.selected_artists.categories
  return (
    <nav className='sticky top-8 z-50 flex items-center justify-center gap-8'>
      {categoriesList.map((category) => (
        <Link
          key={category}
          className={cn(
            'bg-fm-white outline-fm-green rounded-lg px-6 py-1 text-2xl leading-none outline transition duration-300 outline-dashed hover:scale-105',
            {
              'bg-fm-orange text-fm-white outline-fm-orange scale-110 outline-solid':
                normalizeString(category) === currentCategory,
            },
          )}
          href={paths.festival[2025] + '/' + normalizeString(category)}>
          {category}
        </Link>
      ))}
    </nav>
  )
}
