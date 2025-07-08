'use client'

import { useCallback, useEffect, useMemo, useState, useRef } from 'react'
import { normalizeString } from '@/lib/utils'

export interface CatalogFilters {
  categoria: string[]
  ciudad: string[]
  busqueda: string
}

const parseParamArray = (param?: string | null) =>
  param && param.length > 0 ? param.split(',').filter(Boolean).map(normalizeString) : []

function getFiltersFromURL(): CatalogFilters {
  if (typeof window === 'undefined') {
    return { categoria: [], ciudad: [], busqueda: '' }
  }
  const params = new URLSearchParams(window.location.search)
  return {
    categoria: parseParamArray(params.get('categoria')),
    ciudad: parseParamArray(params.get('ciudad')),
    busqueda: params.get('busqueda') || '',
  }
}

function urlHasFilters(): boolean {
  if (typeof window === 'undefined') return false
  const params = new URLSearchParams(window.location.search)
  return (
    !!params.get('categoria') ||
    !!params.get('ciudad') ||
    !!params.get('busqueda')
  )
}

function updateURLParams(filters: CatalogFilters) {
  if (typeof window === 'undefined') return
  const uniqueCategoria = Array.from(new Set(filters.categoria.map(normalizeString)))
  const uniqueCiudad = Array.from(new Set(filters.ciudad.map(normalizeString)))
  const params = new URLSearchParams()
  if (uniqueCategoria.length > 0) params.set('categoria', uniqueCategoria.join(','))
  if (uniqueCiudad.length > 0) params.set('ciudad', uniqueCiudad.join(','))
  if (filters.busqueda.trim() !== '') params.set('busqueda', normalizeString(filters.busqueda.trim()))
  const url = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`
  window.history.replaceState(null, '', url)
}

export function useCatalogFilters() {
  // Inicializa con valores por defecto
  const [filters, setFilters] = useState<CatalogFilters>({
    categoria: [],
    ciudad: [],
    busqueda: '',
  })
  // Solo muestra loader si hay filtros en la URL y aún no se han aplicado
  const [hydrating, setHydrating] = useState(() => (typeof window !== 'undefined' && urlHasFilters()))
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null)
  const isInitializedRef = useRef(false)

  // Si hay filtros en la URL, sincroniza el estado al hidratar
  useEffect(() => {
    if (!isInitializedRef.current && urlHasFilters()) {
      const urlFilters = getFiltersFromURL()
      setFilters(urlFilters)
      setHydrating(false)
      isInitializedRef.current = true
    } else if (!isInitializedRef.current) {
      setHydrating(false)
      isInitializedRef.current = true
    }
  }, [])

  // Actualiza la URL cuando cambian los filtros (pero no durante la inicialización)
  useEffect(() => {
    if (hydrating) return
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current)
    }
    debounceTimerRef.current = setTimeout(() => {
      updateURLParams(filters)
    }, 300)
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current)
      }
    }
      setFilters((prev) => {
        const merged = { ...prev, ...newFilters }
        // Eliminar duplicados en los arrays de filtros
        const uniqueCategoria = Array.from(new Set(merged.categoria.map(normalizeString)))
        const uniqueCiudad = Array.from(new Set(merged.ciudad.map(normalizeString)))

        return {
          categoria: uniqueCategoria,
          ciudad: uniqueCiudad,
          busqueda: merged.busqueda,
        }
      })
    },
    [isReady]
  )

  return useMemo(
    () => ({
      filters,
      setFilters: updateFilters,
      isReady,
    }),
    [filters, updateFilters, isReady]
  )
}
