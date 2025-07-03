type DataType = 'catalog' | 'approvedArtists'

export interface ArtistsDataResult<T> {
  data: T[] | null
  error: string | null
}

export async function fetchArtistsData<T>(
  type: DataType,
): Promise<ArtistsDataResult<T>> {
  let data: T[] | null = null
  let error: string | null = null

  const env = process.env.VERCEL_ENV || process.env.NODE_ENV || 'development'

  try {
    if (env === 'production') {
      // In production, use real data
      if (type === 'catalog') {
        const { getCatalogData } = await import('@/lib/catalog')
        data = (await getCatalogData()) as T[]
      } else {
        const { getApprovedArtistsData } = await import(
          '@/lib/approved_artists'
        )
        data = (await getApprovedArtistsData()) as T[]
      }
    } else {
      // In development, use mock data
      if (type === 'catalog') {
        const { getMockCatalogData } = await import('@/lib/catalog')
        data = getMockCatalogData() as T[]
      } else {
        const { getMockApprovedArtistsData } = await import(
          '@/lib/approved_artists'
        )
        data = getMockApprovedArtistsData() as T[]
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
