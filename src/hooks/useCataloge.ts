import type { Cataloge } from '@/interfaces/cataloge'
import { $searchValue, $selectedFilters } from '@/store/cataloge'
import { normalizeString } from '@/utils/normalizeString'
import { useStore } from '@nanostores/react'

export function useCataloge(list: Cataloge) {
  const searchValue = useStore($searchValue)

  const { city: cityFilter, work_area: workAreaFilter } =
    useStore($selectedFilters)

  const cataloge = list.filter((item) => {
    const matchedSearch =
      searchValue.length === 0 ||
      normalizeString(item.name).includes(searchValue)
    const matchedCity =
      cityFilter.length === 0 || cityFilter.includes(item.city)
    const matchedWorkArea =
      workAreaFilter.length === 0 || workAreaFilter.includes(item.work_area)

    return matchedSearch && matchedCity && matchedWorkArea
  })

  return {
    cataloge,
    searchValue,
    filters: { city: cityFilter, work_area: workAreaFilter },
  }
}
