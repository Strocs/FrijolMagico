import type { Cataloge } from '@/interfaces/cataloge'

export const getFiltersData = (data: Cataloge, key: 'city' | 'work_area') => {
  const uniqueData = new Set(data.map((d) => d[key]))

  return [...uniqueData].map((data) => ({ value: data }))
}
