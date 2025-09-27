import {
  googleSpreadsheetAdapter,
  GoogleSpreadsheetConfig,
} from './services/googleSpreadsheetAdapter'

export type CMSConfig = GoogleSpreadsheetConfig

export async function getDataFromCMS<T>(
  config: CMSConfig,
): Promise<T[] | T[][]> {
  try {
    const { data, error } = await googleSpreadsheetAdapter<T>(config)

    if (error) {
      throw new Error(`Error fetching data from CMS: ${error.message}`)
    }

    return data
  } catch (error) {
    const err = error as Error
    console.error(err.message)
    return []
  }
}
