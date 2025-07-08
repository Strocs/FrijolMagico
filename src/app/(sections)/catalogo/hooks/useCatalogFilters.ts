'use client'

import { useCallback, useMemo, useRef, useState } from 'react'
import { normalizeString } from '@/lib/utils'

export interface CatalogFilters {
  categoria: string[]
  ciudad: string[]
  busqueda: string
}

const parseParamArray = (param?: string | null) =>
  param && param.length > 0 ? param.split(',').filter(Boolean).map(normalizeString) : []

const serializeParamArray = (arr: string[]) =>
  arr.length > 0 ? arr.map(normalizeString).join(',') : undefined

function getInitialFiltersFromURL(): CatalogFilters {
  if (typeof window === 'undefined') {
    return { categoria: [], ciudad: [], busqueda: '' }
  }
  const params = new URLSearchParams(window.location.search)
  return {
    categoria: parseParamArray(params.get('categoria')),
    ciudad: parseParamArray(params.get('ciudad')),
    busqueda: normalizeString(params.get('busqueda') || ''),
  }
}

export function useCatalogFilters() {
  // Solo inicializa desde la URL en el primer render
  const initialized = useRef(false)
  const [filters, setFilters] = useState<CatalogFilters>(() => getInitialFiltersFromURL())

  // Solo lee los query params al montar
  if (!initialized.current && typeof window !== 'undefined') {
    setFilters(getInitialFiltersFromURL())
    initialized.current = true
  }

  // Actualiza los query params en la URL, pero no navega ni hace fetch
  const updateFilters = useCallback(
    (newFilters: Partial<CatalogFilters>) => {
      setFilters((prev) => {
        const merged = { ...prev, ...newFilters }
        const params = new URLSearchParams()
        if (merged.categoria.length > 0) params.set('categoria', serializeParamArray(merged.categoria)!)
        if (merged.ciudad.length > 0) params.set('ciudad', serializeParamArray(merged.ciudad)!)
        if (merged.busqueda.trim() !== '') params.set('busqueda', normalizeString(merged.busqueda.trim()))
        const url = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`
        window.history.replaceState(null, '', url)
        return {
          categoria: merged.categoria.map(normalizeString),
          ciudad: merged.ciudad.map(normalizeString),
          busqueda: normalizeString(merged.busqueda),
        }
      })
    },
    []
  )

  return useMemo(
    () => ({
      filters,
      setFilters: updateFilters,
    }),
    [filters, updateFilters]
  )
}
