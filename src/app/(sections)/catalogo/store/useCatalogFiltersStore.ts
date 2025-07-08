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

export const useCatalogFiltersStore = create<CatalogFiltersState>((set) => ({
  filters: {
    categoria: [],
    ciudad: [],
    busqueda: '',
  },
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
      // Actualiza la URL
      updateURLParams(updated)
      return { filters: updated }
    })
  },
  initializeFromURL: () => {
    if (typeof window !== 'undefined' && urlHasFilters()) {
      set({ filters: getFiltersFromURL(), isReady: true })
    } else {
      set({ isReady: true })
    }
  },
}))
