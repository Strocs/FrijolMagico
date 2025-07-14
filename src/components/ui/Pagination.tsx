'use client'

import { cn } from '@/lib/utils'
import { Button } from './button'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'

interface PaginationProps {
  currentPage: number
  totalItems: number
  itemsPerPage: number
  onPageChange: (page: number) => void
  className?: string
}

export function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  className = '',
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  // Don't render if no items
  if (totalItems === 0) return null

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  const renderPageNumbers = () => {
    const pageNumbers = []
    const maxVisiblePages = 5 // Show max 5 page numbers at a time

    // Don't show pagination if only one page
    if (totalPages <= 1) return null

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }

    // Always show first page
    if (startPage > 1) {
      pageNumbers.push(
        <Button
          key={1}
          variant={1 === currentPage ? 'default' : 'ghost'}
          size='sm'
          onClick={() => onPageChange(1)}
          aria-current={1 === currentPage ? 'page' : undefined}
          className='h-8'>
          1
        </Button>,
      )

      if (startPage > 2) {
        pageNumbers.push(
          <Button
          key='ellipsis-start'
          variant='ghost'
          size='sm'
          className='cursor-default'
          disabled
          aria-hidden='true'>
            <MoreHorizontal className='h-4 w-4' />
          </Button>,
        )
      }
    }

    // Add page numbers
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <Button
          key={i}
          variant={i === currentPage ? 'default' : 'ghost'}
          size='sm'
          onClick={() => onPageChange(i)}
          aria-current={i === currentPage ? 'page' : undefined}
          className='h-8'>
          {i}
        </Button>,
      )
    }

    // Always show last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push(
          <Button
          key='ellipsis-end'
          variant='ghost'
          size='sm'
          className='cursor-default'
          disabled
          aria-hidden='true'>
            <MoreHorizontal className='h-4 w-4' />
          </Button>,
        )
      }

      pageNumbers.push(
        <Button
          key={totalPages}
          variant={totalPages === currentPage ? 'default' : 'ghost'}
          size='sm'
          onClick={() => onPageChange(totalPages)}>
          {totalPages}
        </Button>,
      )
    }

    return pageNumbers
  }

  return (
    <div
      role='navigation'
      aria-label='Paginación de resultados'
      className={cn(
        'flex w-full flex-col items-center justify-between gap-4 sm:flex-row',
        className,
      )}>
      <div className='text-fm-dark/80 text-sm whitespace-nowrap'>
        Mostrando{' '}
        <span className='font-medium'>
          {(currentPage - 1) * itemsPerPage + 1}-
          {Math.min(currentPage * itemsPerPage, totalItems)}
        </span>{' '}
        de <span className='font-medium'>{totalItems}</span> artistas
      </div>

      <div className='flex flex-wrap items-center justify-center gap-1'>
        <Button
          variant='outline'
          size='sm'
          onClick={handlePrevious}
          disabled={currentPage === 1}
          aria-label='Página anterior'
          className='h-8 w-8 p-0'>
          <ChevronLeft className='h-4 w-4' />
        </Button>

        <div className='flex items-center space-x-1'>{renderPageNumbers()}</div>

        <Button
          variant='outline'
          size='sm'
          onClick={handleNext}
          disabled={currentPage === totalPages}
          aria-label='Página siguiente'
          className='h-8 w-8 p-0'>
          <ChevronRight className='h-4 w-4' />
        </Button>
      </div>
    </div>
  )
}
