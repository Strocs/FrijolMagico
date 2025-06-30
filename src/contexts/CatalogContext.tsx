'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'
import { CatalogArtist, SelectedFilters } from '@/types/artists'

interface CatalogContextType {
  searchValue: string
  setSearchValue: (value: string) => void
  selectedFilters: SelectedFilters
  setSelectedFilter: (key: string, value?: string) => void
  resetFilters: () => void
  selectedArtist: CatalogArtist | null
  setSelectedArtist: (artist: CatalogArtist) => void
  isArtistPanelOpen: boolean
  setArtistPanelOpen: (open: boolean) => void
}

const defaultArtist: CatalogArtist = {
  id: '0',
  avatar: '/frijol.png',
  name: 'Frijol Mágico',
  city: 'Coquimbo',
  work_area: 'Ilustración',
  bio: 'Apoyando la Ilustración de la Región de Coquimbo',
  email: 'respaldo.frijol.magico@gmail.com',
  rrss: 'https://www.instagram.com/festivalfrijolmagico/',
}

const CatalogContext = createContext<CatalogContextType | undefined>(undefined)

export const CatalogProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchValue, setSearchValueInternal] = useState('')
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    city: [],
    work_area: [],
  })
  const [selectedArtist, setSelectedArtist] = useState<CatalogArtist | null>(
    null,
  )
  const [isArtistPanelOpen, setIsArtistPanelOpen] = useState(false)

  const setSearchValue = useCallback((value: string) => {
    setSearchValueInternal(value)
  }, [])

  const setSelectedFilter = useCallback((key: string, value?: string) => {
    setSelectedFilters((prev) => {
      if (!value) return { ...prev, [key]: [] }

      const currentValues = prev[key] || []

      if (currentValues.includes(value)) {
        return {
          ...prev,
          [key]: currentValues.filter((v) => v !== value),
        }
      }

      return {
        ...prev,
        [key]: [...currentValues, value],
      }
    })
  }, [])

  const resetFilters = useCallback(() => {
    setSelectedFilters({
      city: [],
      work_area: [],
    })
    setSearchValue('')
  }, [setSearchValue])

  const handleSetSelectedArtist = useCallback((artist: CatalogArtist) => {
    setSelectedArtist(artist)
  }, [])

  const handleSetArtistPanelOpen = useCallback((open: boolean) => {
    setIsArtistPanelOpen(open)
    if (!open) {
      // Delay clearing the selected artist to allow for animation
      setTimeout(() => {
        setSelectedArtist(null)
      }, 300)
    }
  }, [])

  return (
    <CatalogContext.Provider
      value={{
        searchValue,
        setSearchValue,
        selectedFilters,
        setSelectedFilter,
        resetFilters,
        selectedArtist: selectedArtist || defaultArtist,
        setSelectedArtist: handleSetSelectedArtist,
        isArtistPanelOpen,
        setArtistPanelOpen: handleSetArtistPanelOpen,
      }}>
      {children}
    </CatalogContext.Provider>
  )
}

export const useCatalog = (): CatalogContextType => {
  const context = useContext(CatalogContext)
  if (!context) {
    throw new Error('useCatalog must be used within a CatalogProvider')
  }
  return context
}
