import { create } from 'zustand'
import type { CatalogFilterValues } from '../types/filters'
import {
  getFiltersFromURL,
  updateURLParams,
  urlHasFilters,
} from '../utils/urlFilters'

interface CatalogFiltersState {
  filters: CatalogFilterValues
  isReady: boolean
  setFilters: (filters: Partial<CatalogFilterValues>) => void
  initializeFromURL: () => void
}

export const defaultFilters: CatalogFilterValues = {
  category: [],
  city: [],
  country: [],
  search: '',
}

export const useCatalogFiltersStore = create<CatalogFiltersState>((set) => ({
  filters: defaultFilters,
  isReady: false, // Siempre false en SSR y CSR, se setea a true tras inicialización
  setFilters: (newFilters) => {
    set((state) => {
      const merged = { ...state.filters, ...newFilters }
      const uniqueCategory = Array.from(new Set(merged.category))
      const uniqueCity = Array.from(new Set(merged.city))
      const uniqueCountry = Array.from(new Set(merged.country))

      const updated = {
        category: uniqueCategory,
        city: uniqueCity,
        search: merged.search,
        country: uniqueCountry,
      }

      updateURLParams(updated)
      return { filters: updated, isReady: true }
    })
  },
  initializeFromURL: () => {
    if (typeof window !== 'undefined' && urlHasFilters()) {
      set({ filters: getFiltersFromURL(), isReady: true })
    } else {
      set({ filters: defaultFilters, isReady: true })
    }
  },
}))
