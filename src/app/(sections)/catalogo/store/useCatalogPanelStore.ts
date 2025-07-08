import { create } from 'zustand'
import type { CatalogArtist } from '@/types/artists'

interface CatalogPanelState {
  selectedArtist: CatalogArtist | null
  isArtistPanelOpen: boolean
  setSelectedArtist: (artist: CatalogArtist | null) => void
  setArtistPanelOpen: (open: boolean) => void
}

export const useCatalogPanelStore = create<CatalogPanelState>((set) => ({
  selectedArtist: null,
  isArtistPanelOpen: false,
  setSelectedArtist: (artist) => set({ selectedArtist: artist }),
  setArtistPanelOpen: (open) => {
    set({ isArtistPanelOpen: open })
    if (!open) {
      setTimeout(() => {
        set({ selectedArtist: null })
      }, 300)
    }
  },
}))
