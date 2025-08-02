'use client'

import { useState, useEffect, useMemo } from 'react'
import type { CatalogArtist } from '@/types/artists'
import { CatalogArtistCard } from './CatalogArtistCard'
import { useCatalogFiltersStore } from '../store/useCatalogFiltersStore'
import { Pagination } from '@/components/ui/Pagination'
import { CatalogCardLoader } from './CatalogSkeletonLoaders'
import { filterCatalog } from '../lib/filterUtils'

interface CatalogListProps {
  catalog: CatalogArtist[]
}

export const CatalogList: React.FC<CatalogListProps> = ({ catalog }) => {
  const filters = useCatalogFiltersStore((state) => state.filters)
  const isReady = useCatalogFiltersStore((state) => state.isReady)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  // Filter the catalog based on search and filters
  const filteredCatalog = useMemo(() => {
    return filterCatalog(catalog, filters)
  }, [catalog, filters])

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [filters])

  // Calculate pagination
  const totalItems = filteredCatalog.length

  // Get current items
  const currentItems = useMemo<CatalogArtist[]>(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return filteredCatalog.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredCatalog, currentPage, itemsPerPage])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  // Only show pagination if there are items to paginate
  const showPagination = totalItems > itemsPerPage

  if (!isReady) return <CatalogCardLoader />

  return (
    <div className='w-full'>
      {showPagination && (
        <div className='mb-4'>
          <Pagination
            currentPage={currentPage}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            className='justify-center'
          />
        </div>
      )}

      <ul className='mx-auto flex w-full max-w-[calc(var(--card-width)*3+2rem)] flex-wrap justify-center gap-4 py-4 [--card-width:24rem]'>
        {currentItems.map((item) => (
          <CatalogArtistCard key={item.id} {...item} />
        ))}
        {filteredCatalog.length === 0 && (
          <li className='text-mutedfm-white w-full py-8 text-center'>
            No se encontraron artistas que coincidan con los filtros
            seleccionados.
          </li>
        )}
      </ul>

      {showPagination && (
        <div className='mt-6'>
          <Pagination
            currentPage={currentPage}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            className='justify-center'
          />
        </div>
      )}
    </div>
  )
}
