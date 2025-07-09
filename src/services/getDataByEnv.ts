type Env = 'production' | 'preview' | 'development' | string

export interface DataResult<T> {
  data: T[] | null
  error: string | null
}

/**
 * Obtiene datos usando la función real o mock según el entorno.
 * Si no se pasa mockFn, siempre usa realFn.
 */
export async function getDataByEnv<T>(
  realFn: () => Promise<T[]>,
  mockFn?: () => T[]
): Promise<DataResult<T>> {
  let data: T[] | null = null
  let error: string | null = null
  const env: Env = process.env.VERCEL_ENV || process.env.NODE_ENV || 'development'
  try {
    if (mockFn && env !== 'production' && env !== 'preview') {
      data = mockFn()
      // Simula delay en desarrollo/preview
      await new Promise((resolve) => setTimeout(resolve, 500))
    } else {
      data = await realFn()
    }
  } catch (err) {
    console.error('Error loading data:', err)
    error = 'Error al cargar los datos. Por favor, intente nuevamente.'
  }
  return { data, error }
}
