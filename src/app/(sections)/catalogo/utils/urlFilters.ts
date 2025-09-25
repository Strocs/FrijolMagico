import { normalizeString } from '@/utils/utils'
import type { CatalogFilterValues } from '../types/filters'
import { FILTER_KEYS } from '../constants/filterConstants'

export const parseParamArray = (param?: string | null) =>
  param && param.length > 0
    ? param.split(',').filter(Boolean).map(normalizeString)
    : []

export function getFiltersFromURL(): CatalogFilterValues {
  if (typeof window === 'undefined') {
    return { category: [], city: [], search: '', country: [] }
  }
  const params = new URLSearchParams(window.location.search)
  return {
    category: parseParamArray(params.get(FILTER_KEYS.category)),
    city: parseParamArray(params.get(FILTER_KEYS.city)),
    country: parseParamArray(params.get(FILTER_KEYS.country)),
    search: params.get(FILTER_KEYS.search) || '',
  }
}

export function urlHasFilters(): boolean {
  if (typeof window === 'undefined') return false
  const params = new URLSearchParams(window.location.search)
  return (
    !!params.get(FILTER_KEYS.category) ||
    !!params.get(FILTER_KEYS.city) ||
    !!params.get(FILTER_KEYS.search) ||
    !!params.get(FILTER_KEYS.country)
  )
}

// Updates the browser URL parameters based on the provided catalog filters
// without reloading the page. It normalizes and deduplicates filter values,
// constructs the query string, and updates the URL using history.replaceState.
export function updateURLParams(filters: CatalogFilterValues) {
  if (typeof window === 'undefined') return
  const uniqueCategory = Array.from(
    new Set(filters.category.map(normalizeString)),
  )
  const uniqueCity = Array.from(new Set(filters.city.map(normalizeString)))
  const uniqueCountry = Array.from(
    new Set(filters.country.map(normalizeString)),
  )
  const params = new URLSearchParams()
  if (uniqueCategory.length > 0)
    params.set(FILTER_KEYS.category, uniqueCategory.join(','))
  if (uniqueCity.length > 0) params.set(FILTER_KEYS.city, uniqueCity.join(','))
  if (uniqueCountry.length > 0)
    params.set(FILTER_KEYS.country, uniqueCountry.join(','))
  if (filters.search.trim() !== '')
    params.set(FILTER_KEYS.search, normalizeString(filters.search.trim()))
  const url = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`
  window.history.replaceState(null, '', url)
}
