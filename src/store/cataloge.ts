import type { CatalogeArtist, Cataloge } from '@/interfaces/cataloge.d.ts'
import { normalizeString } from '@/utils/normalizeString'
import { atom, map } from 'nanostores'

export const $cataloge = atom<Cataloge | undefined>(undefined)
export const $catalogeOriginal = atom<Cataloge>([])
export const $selected = atom<CatalogeArtist | {}>({})
export const $filtersActive = map({
  city: '',
  work_area: '',
})

export function searchArtist(searchValue: string) {
  const originalState = $catalogeOriginal.get()

  const searchedArtist = originalState.filter((item) =>
    normalizeString(item.name).includes(normalizeString(searchValue))
  )

  $cataloge.set(searchedArtist)

  //evaluate if any filter is active an filterData
  const { city, work_area } = $filtersActive.get()

  if (!!city || !!work_area) {
    filterArtist({ city, work_area })
  }
}

export function filterArtist({
  city = '',
  work_area = '',
}: {
  city?: string
  work_area?: string
}) {
  $filtersActive.set({ city, work_area })

  const currentState = $cataloge.get()!

  const filteredData = currentState.filter((item) => {
    if (!city && !work_area) return
    if (!city) return item.work_area === work_area
    if (!work_area) return item.city === city
    return item.city === city && item.work_area === work_area
  })

  $cataloge.set(filteredData)
}
