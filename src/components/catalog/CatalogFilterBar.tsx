'use client'
import { CatalogFilter } from './CatalogFilter'
import { getFiltersData } from '@/utils/catalog'
import type { Catalog } from '@/types/artists'
import { useState } from 'react'

interface CatalogFilterBarProps {
  catalogData: Catalog
}

export const CatalogFilterBar = ({ catalogData }: CatalogFilterBarProps) => {
  const [filtersOpen, setFiltersOpen] = useState<{ [key: string]: boolean }>({
    city: false,
    work_area: false,
  })

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
      />
      <CatalogFilter
        title='Disciplina'
        filterKey='work_area'
        options={areaFilterData}
        isOpen={filtersOpen.work_area}
        onToggle={toggleFilter}
      />
    </div>
  )
}
