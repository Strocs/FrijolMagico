'use client'

import { useCatalogFiltersContext } from '../contexts/CatalogFiltersContext'

export const CatalogSearchBar = () => {
  const { filters, setFilters } = useCatalogFiltersContext()

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setFilters({ busqueda: e.target.value })
  }

  return (
    <input
      type='text'
      value={filters.busqueda}
      onChange={handleInput}
      placeholder='Busca a tu artista favorito/a'
      className='border-fm-green/30 focus:ring-fm-green/50 h-8 w-full max-w-md rounded-xl border border-dashed px-3 text-sm focus:border-transparent focus:ring-2 focus:outline-none'
    />
  )
}
