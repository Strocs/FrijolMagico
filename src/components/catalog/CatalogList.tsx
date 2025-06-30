'use client'

import { useState, useEffect, useMemo } from 'react'
import type { CatalogArtist } from '@/types/artists'
import { CatalogArtistCard } from './CatalogArtistCard'
import { filterCatalog } from '@/utils/catalog'
import { useCatalog } from '@/contexts/CatalogContext'
import { Pagination } from '@/components/ui/Pagination'

interface CatalogListProps {
  catalog: CatalogArtist[]
}

export const CatalogList: React.FC<CatalogListProps> = ({ catalog }) => {
  const { searchValue, selectedFilters } = useCatalog()
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  // Filter the catalog based on search and filters
  const filteredCatalog = useMemo(() => {
    return filterCatalog(catalog, searchValue, selectedFilters)
  }, [catalog, searchValue, selectedFilters])

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchValue, selectedFilters])

  // Calculate pagination
  const totalItems = filteredCatalog.length

  // Get current items
  const currentItems = useMemo<CatalogArtist[]>(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return filteredCatalog.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredCatalog, currentPage, itemsPerPage])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to top when changing pages
    // window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Only show pagination if there are items to paginate
  const showPagination = totalItems > itemsPerPage

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
