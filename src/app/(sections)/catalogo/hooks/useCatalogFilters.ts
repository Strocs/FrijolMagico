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

function getInitialFiltersFromURL(): CatalogFilters {
  if (typeof window === 'undefined') {
    return { categoria: [], ciudad: [], busqueda: '' }
  }
  const params = new URLSearchParams(window.location.search)
  return {
    categoria: parseParamArray(params.get('categoria')),
    ciudad: parseParamArray(params.get('ciudad')),
    // Guardar el texto original, no normalizado
    busqueda: params.get('busqueda') || '',
  }
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
  const [filters, setFilters] = useState<CatalogFilters>({
    categoria: [],
    ciudad: [],
    busqueda: '',
  })
  const [isReady, setIsReady] = useState(false)
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null)
  const isInitializedRef = useRef(false)

  // Inicializa los filtros desde la URL solo en el cliente
  useEffect(() => {
    if (!isInitializedRef.current) {
      const initialFilters = getInitialFiltersFromURL()
      setFilters(initialFilters)
      setIsReady(true)
      isInitializedRef.current = true
    }
  }, [])

  // Actualiza la URL cuando cambian los filtros (pero no durante la inicialización)
  useEffect(() => {
    if (!isReady || !isInitializedRef.current) return

    // Debounce para búsquedas de texto
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
  }, [filters, isReady])

  // Función para actualizar filtros sin side effects
  const updateFilters = useCallback(
    (newFilters: Partial<CatalogFilters>) => {
      if (!isReady) return

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
