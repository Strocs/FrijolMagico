import { Check, PlusCircle } from 'lucide-react'
import { useRef, useEffect } from 'react'
import type { FilterKey } from '../lib/filterKeys'
import { normalizeString } from '@/lib/utils'

interface Option {
  value: string
}

interface CatalogFilterProps {
  title: string
  filterKey: FilterKey
  options: Option[]
  isOpen: boolean
  onToggle: (filterKey: FilterKey) => void
  selectedValues?: string[]
  onSelect?: (filterKey: FilterKey, value: string) => void
  onClear?: (filterKey: FilterKey) => void
}

export const CatalogFilter = ({
  title,
  filterKey,
  options,
  isOpen,
  onToggle,
  selectedValues = [],
  onSelect,
  onClear,
}: CatalogFilterProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleOptionClick = (value: string) => {
    if (onSelect) onSelect(filterKey, value)
  }
  const handleClearClick = () => {
    if (onClear) onClear(filterKey)
  }

  // Close dropdown on outside click or Escape
  useEffect(() => {
    if (!isOpen) return
    function handleClick(event: Event) {
      const dropdown = dropdownRef.current
      const button = buttonRef.current
      if (!dropdown || !button) return
      const target = event.target as Node
      if (!dropdown.contains(target) && !button.contains(target)) {
        onToggle(filterKey)
      }
    }
    function handleKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onToggle(filterKey)
      }
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('touchstart', handleClick)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('touchstart', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [isOpen, onToggle, filterKey])

  return (
    <div className='relative'>
      <button
        ref={buttonRef}
        onClick={() => onToggle(filterKey)}
        aria-haspopup='true'
        aria-expanded={isOpen}
        aria-controls={`filter-options-${filterKey}`}
        className='border-fm-green/30 text-fm-dark/80 hover:bg-fm-dark/10 flex cursor-pointer items-center gap-2 rounded-xl border border-dashed px-3 py-1.5 text-sm transition-colors'>
        <PlusCircle className='h-4 w-4' />
        <span>{title}</span>
        {selectedValues.length > 0 && (
          <span className='bg-fm-yellow ml-1 flex h-5 w-5 items-center justify-center rounded-full text-xs text-white'>
            {selectedValues.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          id={`filter-options-${filterKey}`}
          role='menu'
          className='bg-fm-white absolute z-10 mt-2 w-48 rounded-md border border-gray-200 shadow-lg'>
          <ul className='max-h-60 space-y-1 overflow-auto p-1'>
            {options.map((option) => {
              const isSelected = selectedValues
                .map(normalizeString)
                .includes(normalizeString(option.value))
              return (
                <li
                  key={option.value}
                  onClick={() => handleOptionClick(option.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleOptionClick(option.value)
                    }
                  }}
                  role='menuitem'
                  tabIndex={0}
                  className={`flex cursor-pointer items-center rounded px-3 py-2 text-sm ${
                    isSelected
                      ? 'text-fm-green font-bold'
                      : 'hover:bg-fm-dark/10 text-fm-dark/80'
                  }`}>
                  <span className='flex-1'>{option.value}</span>
                  {isSelected && <Check className='text-fm-green h-4 w-4' />}
                </li>
              )
            })}
            {selectedValues.length > 0 && (
              <li className='mt-1 border-t border-gray-200 pt-1'>
                <button
                  onClick={handleClearClick}
                  className='text-fm-orange hover:bg-fm-black/10 w-full cursor-pointer rounded px-3 py-2 text-center text-sm'>
                  Borrar filtros
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
