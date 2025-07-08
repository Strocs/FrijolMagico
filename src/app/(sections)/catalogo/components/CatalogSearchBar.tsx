'use client'

import { useCatalogFiltersContext } from '../contexts/CatalogFiltersContext'
import { useCallback } from 'react'
import { CatalogSearchBarLoader } from './CatalogSkeletonLoaders'

export const CatalogSearchBar = () => {
  const { filters, setFilters, isReady } = useCatalogFiltersContext()

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      if (isReady) {
        setFilters({ busqueda: e.target.value })
      }
    },
    [setFilters, isReady],
  )

  if (!isReady) return <CatalogSearchBarLoader />

  return (
    <input
      type='text'
      value={filters.busqueda}
      onChange={handleInput}
      placeholder='Busca a tu artista favorito/a'
      aria-label='Buscar artista'
      className='border-fm-green/30 focus:ring-fm-green/50 h-8 w-full max-w-md rounded-xl border border-dashed px-3 text-sm focus:border-transparent focus:ring-2 focus:outline-none'
    />
  )
}
