import { FILTER_LABELS } from '../constants/filterConstants'

export interface CatalogFilterValues {
  category: string[]
  country: string[]
  city: string[]
  search: string
}

export type CatalogFilterKey = keyof typeof FILTER_LABELS
export type CatalogSelectionFilterKey = Exclude<CatalogFilterKey, 'search'>
