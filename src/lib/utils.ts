import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { CatalogArtist, SelectedFilters } from '@/types/artists'

// cn function for tailwind merge
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Normalize string for search functionality
export const normalizeString = (str: string): string => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replaceAll(' ', '')
}

// Format URL to ensure it has https://
export const formatUrl = (url: string): string => {
  if (!url) return ''
  return url.startsWith('http') ? url : `https://${url}`
}

// Format URL without query parameters
export const formatUrlWithoutQuery = (url: string): string => {
  if (!url) return ''
  const formattedUrl = formatUrl(url)
  const urlWithoutQuery = formattedUrl.split('?')[0]
  return urlWithoutQuery.endsWith('/')
    ? urlWithoutQuery.slice(0, -1)
    : urlWithoutQuery
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
  catalog: CatalogArtist[],
  key: keyof CatalogArtist,
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
  catalog: CatalogArtist[],
  searchValue: string,
  filters: SelectedFilters,
): CatalogArtist[] => {
  const normalizedSearch = normalizeString(searchValue)

  return catalog.filter((item) => {
    // Filter by search
    const matchesSearch =
      !searchValue ||
      normalizeString(item.name).includes(normalizedSearch) ||
      (item.collective &&
        normalizeString(item.collective.name).includes(normalizedSearch))

    // Filter by city
    const matchesCity =
      !filters.city?.length ||
      (item.city &&
        filters.city.map(normalizeString).includes(normalizeString(item.city)))

    // Filter by work area (disciplina/categoria)
    const matchesWorkArea =
      !filters.work_area?.length ||
      (item.work_area &&
        filters.work_area
          .map(normalizeString)
          .includes(normalizeString(item.work_area)))

    return matchesSearch && matchesCity && matchesWorkArea
  })
}
