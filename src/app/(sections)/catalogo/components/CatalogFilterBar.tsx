'use client'
import { CatalogFilter } from './CatalogFilter'
import { getFiltersData } from '@/lib/utils'
import type { CatalogArtist } from '@/types/artists'
import { useState } from 'react'
import { useCatalogFiltersContext } from '../contexts/CatalogFiltersContext'
import type { FilterKey } from '../lib/filterKeys'

interface CatalogFilterBarProps {
  catalogData: CatalogArtist[]
}

export const CatalogFilterBar = ({ catalogData }: CatalogFilterBarProps) => {
  const [filtersOpen, setFiltersOpen] = useState<Record<FilterKey, boolean>>({
    city: false,
    category: false,
    search: false,
  })
  const { filters, setFilters } = useCatalogFiltersContext()

  const toggleFilter = (filterKey: FilterKey) => {
    setFiltersOpen((prev) => {
      return Object.keys(prev).reduce(
        (acc, curr) => {
          acc[curr as FilterKey] = curr === filterKey ? !prev[filterKey] : false
          return acc
        },
        {} as Record<FilterKey, boolean>,
      )
    })
  }

  const handleSelect = (filterKey: FilterKey, value: string) => {
    if (filterKey === 'city') {
      const current = filters.ciudad
      setFilters({
        ciudad: current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value],
      })
    } else if (filterKey === 'category') {
      const current = filters.categoria
      setFilters({
        categoria: current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value],
      })
    }
  }

  const handleClear = (filterKey: FilterKey) => {
    if (filterKey === 'city') setFilters({ ciudad: [] })
    else if (filterKey === 'category') setFilters({ categoria: [] })
  }

  // Mapeo de filtro visual a propiedad de modelo
  const FILTER_MODEL_KEYS = {
    city: 'city',
    category: 'work_area',
  } as const

  const cityFilterData = getFiltersData(catalogData, FILTER_MODEL_KEYS.city)
  const areaFilterData = getFiltersData(catalogData, FILTER_MODEL_KEYS.category)
  return (
    <div className='flex flex-wrap gap-4'>
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
    </div>
  )
}
