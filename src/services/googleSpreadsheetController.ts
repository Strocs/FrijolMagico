import { GoogleSpreadsheet } from 'google-spreadsheet'

interface GoogleSpreadsheetConfig {
  sheetId: string | undefined
  apiKey: string | undefined
  headers: Record<string, string>
}

export const googleSpreadsheetController = async <T>({
  sheetId,
  apiKey,
  headers,
}: GoogleSpreadsheetConfig): Promise<T[]> => {
  if (!sheetId || !apiKey) {
    throw new Error('Missing Google Sheets configuration: sheetId or apiKey is undefined.')
  }

  try {
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
    console.error('Error fetching Google Sheets data:', error)
    return []
  }
}
