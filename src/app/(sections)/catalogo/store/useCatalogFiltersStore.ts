import { create } from 'zustand'
import { normalizeString } from '@/lib/utils'
import type { CatalogFilters } from '../types/filters'
import { getFiltersFromURL, updateURLParams, urlHasFilters } from '../lib/urlFilters'

interface CatalogFiltersState {
  filters: CatalogFilters
  isReady: boolean
  setFilters: (filters: Partial<CatalogFilters>) => void
  initializeFromURL: () => void
}

const defaultFilters: CatalogFilters = {
  categoria: [],
  ciudad: [],
  busqueda: '',
}

export const useCatalogFiltersStore = create<CatalogFiltersState>((set) => ({
  filters: defaultFilters,
  isReady: false, // Siempre false en SSR y CSR, se setea a true tras inicialización
  setFilters: (newFilters) => {
    set((state) => {
      const merged = { ...state.filters, ...newFilters }
      const uniqueCategoria = Array.from(new Set(merged.categoria.map(normalizeString)))
      const uniqueCiudad = Array.from(new Set(merged.ciudad.map(normalizeString)))
      const updated = {
        categoria: uniqueCategoria,
        ciudad: uniqueCiudad,
        busqueda: merged.busqueda,
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
