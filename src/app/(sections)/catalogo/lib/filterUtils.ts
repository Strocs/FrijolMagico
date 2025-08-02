import { normalizeString } from '@/lib/utils'
import { CatalogArtist } from '@/types/artists'
import { CatalogFilterValues } from '../types/filters'

export const parseParamArray = (param?: string | null) =>
  param && param.length > 0
    ? param.split(',').filter(Boolean).map(normalizeString)
    : []

export const dedupeArray = (arr: string[]) =>
  Array.from(new Set(arr.map(normalizeString)))

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
  filters: CatalogFilterValues,
): CatalogArtist[] => {
  const searchValue = filters.search
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
      !filters.category?.length ||
      (item.category &&
        filters.category
          .map(normalizeString)
          .includes(normalizeString(item.category)))

    const matchesCountry =
      !filters.country?.length ||
      (item.country &&
        filters.country
          .map(normalizeString)
          .includes(normalizeString(item.country)))

    return matchesSearch && matchesCity && matchesWorkArea && matchesCountry
  })
}
