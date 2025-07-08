'use client'
import { CatalogFilter } from './CatalogFilter'
import { getFiltersData } from '@/lib/utils'
import type { CatalogArtist } from '@/types/artists'
import { useState } from 'react'
import { useCatalogFiltersContext } from '../contexts/CatalogFiltersContext'

interface CatalogFilterBarProps {
  catalogData: CatalogArtist[]
}

export const CatalogFilterBar = ({ catalogData }: CatalogFilterBarProps) => {
  const [filtersOpen, setFiltersOpen] = useState<{ [key: string]: boolean }>({
    city: false,
    work_area: false,
  })
  const { filters, setFilters } = useCatalogFiltersContext()

  const toggleFilter = (filterKey: string) => {
    // toggle the filter state and close the other filters
    setFiltersOpen((prev) => {
      return Object.keys(prev).reduce(
        (acc, curr) => {
          if (curr === filterKey) {
            acc[curr] = !prev[curr]
          } else {
            acc[curr] = false
          }
          return acc
        },
        {} as { [key: string]: boolean },
      )
    })
  }

  const handleSelect = (filterKey: string, value: string) => {
    if (filterKey === 'city') {
      const current = filters.ciudad
      setFilters({
        ciudad: current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value],
      })
    } else if (filterKey === 'work_area') {
      const current = filters.categoria
      setFilters({
        categoria: current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value],
      })
    }
  }

  const handleClear = (filterKey: string) => {
    if (filterKey === 'city') setFilters({ ciudad: [] })
    else if (filterKey === 'work_area') setFilters({ categoria: [] })
  }

  const cityFilterData = getFiltersData(catalogData, 'city')
  const areaFilterData = getFiltersData(catalogData, 'work_area')
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
        filterKey='work_area'
        options={areaFilterData}
        isOpen={filtersOpen.work_area}
        onToggle={toggleFilter}
        selectedValues={filters.categoria}
        onSelect={handleSelect}
        onClear={handleClear}
      />
    </div>
  )
}
