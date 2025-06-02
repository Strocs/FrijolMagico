import type { CatalogeArtist } from '@/interfaces/cataloge.d.ts'
import { normalizeString } from '@/utils/normalizeString'
import { atom, map } from 'nanostores'

interface SelectedFilters {
  [key: string]: string[]
}

const defaultSelectedValue = {
  id: '0',
  avatar: '/frijol.png',
  name: 'Frijol Mágico',
  city: 'Coquimbo',
  work_area: 'Festival',
  bio: 'Apoyando la Ilustración de la Región de Coquimbo',
  email: 'respaldo.frijol.magico@gmail.com',
  rrss: 'https://www.instagram.com/festivalfrijolmagico/',
}

export const $searchValue = atom<string>('')

export const $selectedCataloge = atom<CatalogeArtist>(defaultSelectedValue)

export const $isArtistPanelOpen = atom(false)

export const $selectedFilters = map<SelectedFilters>({
  city: [],
  work_area: [],
})

export function setSearchValue(searchValue: string) {
  $searchValue.set(normalizeString(searchValue))
}

export function setSelectedArtist(artist: CatalogeArtist) {
  const currentSelected = $selectedCataloge.get()

  if (currentSelected.id === artist.id) return

  $selectedCataloge.set(artist)
}

export function setSelectedFilter(key: string, value?: string) {
  if (!value) return $selectedFilters.setKey(key, [])

  const currentFilters = $selectedFilters.get()

  if (currentFilters[key].includes(value)) {
    const deletedValue = currentFilters[key].filter(
      (filter) => filter !== value
    )

    $selectedFilters.setKey(key, deletedValue)
    return
  }

  $selectedFilters.setKey(key, [value, ...currentFilters[key]])
}

export function setArtistPanelOpen(open?: boolean) {
  const currentState = $isArtistPanelOpen.get()

  if (open === undefined) return $isArtistPanelOpen.set(!currentState)

  if (currentState === open) return

  if (!open) {
    setTimeout(() => {
      $selectedCataloge.set(defaultSelectedValue)
    }, 300)
  }

  $isArtistPanelOpen.set(open!)
}

export function resetFilters() {
  $selectedFilters.set({
    city: [],
    work_area: [],
  })
}
