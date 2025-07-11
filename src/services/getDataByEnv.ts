import { ErrorObject } from "@/types/errors"
import { googleSpreadsheetController } from "./googleSpreadsheetController"

type Env = 'production' | 'preview' | 'development' | string

export interface DataResult<T> {
  data: T[] | null
  error?: ErrorObject
  success: boolean
}

interface GetDataByEnvParams<T> {
  mockFn: () => T[]
  sheetId?: string
  headers: Record<string, string>
}

export async function getDataByEnv<T>({
  mockFn,
  sheetId,
  headers,
}: GetDataByEnvParams<T>): Promise<DataResult<T>> {
  try {

    let data: T[]
    const env: Env = process.env.VERCEL_ENV || process.env.NODE_ENV || 'development'

    if (env === 'development' || !sheetId) {
      data = mockFn()
    } else {
      data = await googleSpreadsheetController<T>({
        sheetId,
        headers,
      })
    }

    if (data.length === 0 || !data) {
      throw new Error('No data found or data is empty.')
    }

    return { data, success: true }
  } catch (error) {
    console.error(error)
    return {
      data: null,
      success: false
    }
  }
}
