import Link from 'next/link'
import siteData from '@/data/site.json'
import { normalizeString } from '@/lib/utils'
import { paths } from '@/config/paths'

export const ApprovedArtistsCategoriesNav = () => {
  const categoriesList = siteData.selected_artists.categories
  return (
    <nav className='flex items-center justify-center gap-4'>
      {categoriesList.map((category) => (
        <Link
          key={category}
          href={paths.festival[2025] + '/' + normalizeString(category)}>
          {category}
        </Link>
      ))}
    </nav>
  )
}
