import type { CatalogeArtist } from '@/interfaces/cataloge.d.ts'
import { normalizeString } from '@/utils/normalizeString'
import { atom, map } from 'nanostores'

interface SelectedFilters {
  [key: string]: string[]
}

export const $searchValue = atom<string>('')
export const $selectedCataloge = atom<CatalogeArtist | {}>({})
export const $selectedFilters = map<SelectedFilters>({
  city: [],
  work_area: [],
})

export function setSearchValue(searchValue: string) {
  $searchValue.set(normalizeString(searchValue))
}

export function setSelectedArtist(artist: CatalogeArtist) {
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

export function resetFilters() {
  $selectedFilters.set({
    city: [],
    work_area: [],
  })
}
