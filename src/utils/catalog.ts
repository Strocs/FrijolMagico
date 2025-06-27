import type { Catalog, SelectedFilters } from '@/types/artists'

// Normalize string for search functionality
export const normalizeString = (str: string): string => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
}

// Format URL to ensure it has https://
export const formatUrl = (url: string): string => {
  if (!url) return ''
  return url.startsWith('http') ? url : `https://${url}`
}

// Extract Instagram username from URL
export const getInstagramUserTag = (url: string): string => {
  if (!url) return ''
  const formattedUrl = formatUrl(url)
  const match = formattedUrl.match(
    /(?:https?:\/\/)?(?:www\.)?instagram\.com\/([^/]+)/i,
  )
  const userTag = match?.[1].split('?')[0]
  return match ? `@${userTag}` : formattedUrl
}

// Get unique filter options for the given key
export const getFiltersData = (
  catalog: Catalog,
  key: keyof Catalog[0],
): { value: string }[] => {
  const uniqueValues = new Set<string>()

  catalog.forEach((item) => {
    const value = item[key]
    if (value) {
      uniqueValues.add(value)
    }
  })

  return Array.from(uniqueValues)
    .sort()
    .map((value) => ({ value }))
}

// Filter catalog based on search and filters
export const filterCatalog = (
  catalog: Catalog,
  searchValue: string,
  filters: SelectedFilters,
): Catalog => {
  const normalizedSearch = normalizeString(searchValue)

  return catalog.filter((item) => {
    // Filter by search
    const matchesSearch =
      !searchValue || normalizeString(item.name).includes(normalizedSearch)

    // Filter by city
    const matchesCity =
      !filters.city?.length || (item.city && filters.city.includes(item.city))

    // Filter by work area
    const matchesWorkArea =
      !filters.work_area?.length ||
      (item.work_area && filters.work_area.includes(item.work_area))

    return matchesSearch && matchesCity && matchesWorkArea
  })
}
