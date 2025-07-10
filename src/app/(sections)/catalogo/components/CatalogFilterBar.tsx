'use client'
import { CatalogFilter } from './CatalogFilter'
import { getFiltersData, normalizeString } from '@/lib/utils'
import type { CatalogArtist } from '@/types/artists'
import { useState, useCallback } from 'react'
import { useCatalogFiltersStore } from '../store/useCatalogFiltersStore'
import type { FilterKey } from '../lib/filterKeys'
import { CatalogFiltersBarLoader } from './CatalogSkeletonLoaders'
import { urlHasFilters } from '../lib/urlFilters'

interface CatalogFilterBarProps {
  catalogData: CatalogArtist[]
}

export const CatalogFilterBar = ({ catalogData }: CatalogFilterBarProps) => {
  const [filtersOpen, setFiltersOpen] = useState<Record<FilterKey, boolean>>({
    city: false,
    category: false,
    search: false,
  })
  const filters = useCatalogFiltersStore((state) => state.filters)
  const setFilters = useCatalogFiltersStore((state) => state.setFilters)
  const isReady = useCatalogFiltersStore((state) => state.isReady)

  const toggleFilter = useCallback((filterKey: FilterKey) => {
    setFiltersOpen((prev) => {
      return Object.keys(prev).reduce(
        (acc, curr) => {
          acc[curr as FilterKey] = curr === filterKey ? !prev[filterKey] : false
          return acc
        },
        {} as Record<FilterKey, boolean>,
      )
    })
  }, [])

  const handleSelect = useCallback(
    (filterKey: FilterKey, value: string) => {
      if (!isReady) return

      if (filterKey === 'city') {
        const current = filters.ciudad
        const normalizedValue = normalizeString(value)
        const alreadySelected = current
          .map(normalizeString)
          .includes(normalizedValue)
        setFilters({
          ciudad: alreadySelected
            ? current.filter((v) => normalizeString(v) !== normalizedValue)
            : [...current, value],
        })
      } else if (filterKey === 'category') {
        const current = filters.categoria
        const normalizedValue = normalizeString(value)
        const alreadySelected = current
          .map(normalizeString)
          .includes(normalizedValue)
        setFilters({
          categoria: alreadySelected
            ? current.filter((v) => normalizeString(v) !== normalizedValue)
            : [...current, value],
        })
      }
    },
    [filters, setFilters, isReady],
  )

  const handleClear = useCallback(
    (filterKey: FilterKey) => {
      if (!isReady) return

      if (filterKey === 'city') setFilters({ ciudad: [] })
      else if (filterKey === 'category') setFilters({ categoria: [] })
    },
    [setFilters, isReady],
  )

  // Mapeo de filtro visual a propiedad de modelo
  const FILTER_MODEL_KEYS = {
    city: 'city',
    category: 'work_area',
  } as const

  if (!isReady) return <CatalogFiltersBarLoader />

  const cityFilterData = getFiltersData(catalogData, FILTER_MODEL_KEYS.city)
  const areaFilterData = getFiltersData(catalogData, FILTER_MODEL_KEYS.category)

  return (
    <div className='flex shrink-0 flex-wrap justify-center gap-4'>
      <CatalogFilter
        title='Ciudad'
        filterKey='city'
        options={cityFilterData}
        isOpen={filtersOpen.city}
        onToggle={toggleFilter}
        selectedValues={filters.ciudad}
        onSelect={handleSelect}
        onClear={handleClear}
      />
      <CatalogFilter
        title='Disciplina'
        filterKey='category'
        options={areaFilterData}
        isOpen={filtersOpen.category}
        onToggle={toggleFilter}
        selectedValues={filters.categoria}
        onSelect={handleSelect}
        onClear={handleClear}
      />
      {urlHasFilters() && (
        <button
          onClick={() =>
            setFilters({ ciudad: [], categoria: [], busqueda: '' })
          }
          className='border-fm-orange/30 bg-fm-orange/80 text-fm-white hover:bg-fm-orange flex cursor-pointer items-center gap-2 rounded-xl border border-dashed px-3 py-1.5 text-sm transition-colors'>
          <span>Limpiar filtros</span>
        </button>
      )}
    </div>
  )
}
