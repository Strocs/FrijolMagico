type DataType = 'catalog' | 'selectedArtists'

interface UseArtistsDataResult<T> {
  data: T[] | null
  error: string | null
}

export async function useArtistsData<T>(
  type: DataType,
): Promise<UseArtistsDataResult<T>> {
  let data: T[] | null = null
  let error: string | null = null

  try {
    if (process.env.NODE_ENV === 'production') {
      // In production, use real data
      if (type === 'catalog') {
        const { getCatalogData } = await import('@/lib/catalog')
        data = (await getCatalogData()) as T[]
      } else {
        const { getSelectedArtistsData } = await import(
          '@/lib/selected_artists'
        )
        data = (await getSelectedArtistsData()) as T[]
      }
    } else {
      // In development, use mock data
      if (type === 'catalog') {
        const { getMockCatalogData } = await import('@/lib/catalog')
        data = getMockCatalogData() as T[]
      } else {
        const { getMockSelectedArtistsData } = await import(
          '@/lib/selected_artists'
        )
        data = getMockSelectedArtistsData() as T[]
      }

      // Simulate network delay in development
      await new Promise((resolve) => setTimeout(resolve, 500))
    }
  } catch (err) {
    console.error(`Error loading ${type} data:`, err)
    error = 'Error al cargar los datos. Por favor, intente nuevamente.'
  }

  return { data, error }
}
