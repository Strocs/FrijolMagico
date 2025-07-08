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
        // Eliminar duplicados en los arrays de filtros
        const uniqueCategoria = Array.from(new Set(merged.categoria.map(normalizeString)))
        const uniqueCiudad = Array.from(new Set(merged.ciudad.map(normalizeString)))
        const params = new URLSearchParams()
        if (uniqueCategoria.length > 0) params.set('categoria', uniqueCategoria.join(','))
        if (uniqueCiudad.length > 0) params.set('ciudad', uniqueCiudad.join(','))
        if (merged.busqueda.trim() !== '') params.set('busqueda', normalizeString(merged.busqueda.trim()))
        const url = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`
        window.history.replaceState(null, '', url)
        return {
          categoria: uniqueCategoria,
          ciudad: uniqueCiudad,
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
