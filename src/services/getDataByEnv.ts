import { ErrorObject } from "@/types/errors"

type Env = 'production' | 'preview' | 'development' | string

export interface DataResult<T> {
  data: T[] | null
  error?: ErrorObject
  success: boolean
}

/**
 * Obtiene datos usando la función real o mock según el entorno.
 * Si no se pasa mockFn, siempre usa realFn.
 */
export async function getDataByEnv<T>(
  realFn: () => Promise<T[]>,
  mockFn?: () => T[]
): Promise<DataResult<T>> {
  try {
    let data: T[] | null = null
    const env: Env = process.env.VERCEL_ENV || process.env.NODE_ENV || 'development'

    if (mockFn && env !== 'production' && env !== 'preview') {
      data = mockFn()
      // Simula delay en desarrollo
      await new Promise((resolve) => setTimeout(resolve, 500))
    } else {
      data = await realFn()
    }

    return { data, success: true }
  } catch {
    return {
      data: null,
      success: false
    }
  }
}
