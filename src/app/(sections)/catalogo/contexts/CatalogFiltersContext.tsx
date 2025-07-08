'use client'

import { createContext, useContext, ReactNode } from 'react'
import { useCatalogFilters, CatalogFilters } from '../hooks/useCatalogFilters'

interface CatalogFiltersContextType {
  filters: CatalogFilters
  setFilters: (filters: Partial<CatalogFilters>) => void
}

const CatalogFiltersContext = createContext<
  CatalogFiltersContextType | undefined
>(undefined)

export function CatalogFiltersProvider({ children }: { children: ReactNode }) {
  const { filters, setFilters } = useCatalogFilters()
  return (
    <CatalogFiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </CatalogFiltersContext.Provider>
  )
}

export function useCatalogFiltersContext() {
  const ctx = useContext(CatalogFiltersContext)
  if (!ctx)
    throw new Error(
      'useCatalogFiltersContext debe usarse dentro de CatalogFiltersProvider',
    )
  return ctx
}
