'use client'
import { useEffect } from 'react'
import { useCatalogFiltersStore } from '../store/useCatalogFiltersStore'

export function CatalogFiltersInitializer() {
  useEffect(() => {
    useCatalogFiltersStore.getState().initializeFromURL()
  }, [])
  return null
}
