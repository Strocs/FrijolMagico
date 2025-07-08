import { Check, PlusCircle } from 'lucide-react'

interface Option {
  value: string
}

interface CatalogFilterProps {
  title: string
  filterKey: string
  options: Option[]
  isOpen: boolean
  onToggle: (filterKey: string) => void
  selectedValues?: string[]
  onSelect?: (filterKey: string, value: string) => void
  onClear?: (filterKey: string) => void
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
  const handleOptionClick = (value: string) => {
    if (onSelect) onSelect(filterKey, value)
  }
  const handleClearClick = () => {
    if (onClear) onClear(filterKey)
  }

  return (
    <div className='relative'>
      <button
        onClick={() => onToggle(filterKey)}
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
        <div className='bg-fm-white absolute z-10 mt-2 w-48 rounded-md border border-gray-200 shadow-lg'>
          <ul className='max-h-60 space-y-1 overflow-auto p-1'>
            {options.map((option) => {
              const isSelected = selectedValues.includes(option.value)
              return (
                <li
                  key={option.value}
                  onClick={() => handleOptionClick(option.value)}
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
                <div
                  onClick={handleClearClick}
                  className='text-fm-orange hover:bg-fm-black/10 cursor-pointer rounded px-3 py-2 text-center text-sm'>
                  Borrar filtros
                </div>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
