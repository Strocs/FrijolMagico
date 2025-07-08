import { normalizeString } from '@/lib/utils'
import type { CatalogFilters } from '../types/filters'
import { FILTER_KEYS } from './filterKeys'

export const parseParamArray = (param?: string | null) =>
  param && param.length > 0 ? param.split(',').filter(Boolean).map(normalizeString) : []

export function getFiltersFromURL(): CatalogFilters {
  if (typeof window === 'undefined') {
    return { categoria: [], ciudad: [], busqueda: '' }
  }
  const params = new URLSearchParams(window.location.search)
  return {
    categoria: parseParamArray(params.get(FILTER_KEYS.category)),
    ciudad: parseParamArray(params.get(FILTER_KEYS.city)),
    busqueda: params.get(FILTER_KEYS.search) || '',
  }
}

export function urlHasFilters(): boolean {
  if (typeof window === 'undefined') return false
  const params = new URLSearchParams(window.location.search)
  return (
    !!params.get(FILTER_KEYS.category) ||
    !!params.get(FILTER_KEYS.city) ||
    !!params.get(FILTER_KEYS.search)
  )
}

export function updateURLParams(filters: CatalogFilters) {
  if (typeof window === 'undefined') return
  const uniqueCategoria = Array.from(new Set(filters.categoria.map(normalizeString)))
  const uniqueCiudad = Array.from(new Set(filters.ciudad.map(normalizeString)))
  const params = new URLSearchParams()
  if (uniqueCategoria.length > 0) params.set(FILTER_KEYS.category, uniqueCategoria.join(','))
  if (uniqueCiudad.length > 0) params.set(FILTER_KEYS.city, uniqueCiudad.join(','))
  if (filters.busqueda.trim() !== '') params.set(FILTER_KEYS.search, normalizeString(filters.busqueda.trim()))
  const url = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`
  window.history.replaceState(null, '', url)
}
