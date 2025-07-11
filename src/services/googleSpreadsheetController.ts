import { GoogleSpreadsheet } from 'google-spreadsheet'

interface GoogleSpreadsheetConfig {
  sheetId: string
  headers: Record<string, string>
}

export const googleSpreadsheetController = async <T>({
  sheetId,
  headers,
}: GoogleSpreadsheetConfig): Promise<T[]> => {
  try {
    const apiKey = process.env.GOOGLE_API_KEY

    if (!sheetId || !apiKey) {
      throw new Error('Falta configuración de Google Sheets: sheetId o apiKey.')
    }

    const doc = new GoogleSpreadsheet(sheetId, {
      apiKey,
    })

    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[0]
    const rows = await sheet.getRows()

    // Process the rows into T format
    const data = rows.map(async (row) =>
      Object.entries(headers).reduce((acc, [key, value]) => {
        acc[key as keyof T] = row.get(value) || ''
        return acc
      }, {} as T),
    )

    return await Promise.all(data)
  } catch (error) {
    const err = error as Error
    console.error(err)
    return Promise.reject({
      message: err.message,
    })
  }
}
