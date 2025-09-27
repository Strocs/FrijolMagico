import { GoogleSpreadsheet, GoogleSpreadsheetRow } from 'google-spreadsheet'

export interface GoogleSpreadsheetConfig {
  sheetId?: string
  sheetIndex?: number | number[]
  startRow?: number
}

export async function googleSpreadsheetAdapter<T = Record<string, unknown>>({
  sheetId,
  sheetIndex = 0,
  startRow = 1,
}: GoogleSpreadsheetConfig): Promise<{
  data: T[] | T[][]
  error: Error | null
}> {
  try {
    const apiKey = process.env.GOOGLE_API_KEY

    if (!sheetId || !apiKey) {
      throw new Error('Falta configuración de Google Sheets: sheetId o apiKey.')
    }

    const doc = new GoogleSpreadsheet(sheetId, {
      apiKey,
    })

    await doc.loadInfo()

    // Support for multiple sheets
    if (Array.isArray(sheetIndex)) {
      const allData = []
      for (const index of sheetIndex) {
        const sheet = doc.sheetsByIndex[index]
        await sheet.loadHeaderRow(startRow)
        const rows = await sheet.getRows()
        const headers = sheet.headerValues

        const data = normalizeData(rows, headers)

        allData.push(data)
      }
      return { data: allData as T[][], error: null }
    }

    // Single sheet processing

    const sheet = doc.sheetsByIndex[sheetIndex]
    await sheet.loadHeaderRow(startRow)
    const rows = await sheet.getRows<Record<string, unknown>>()
    const headers = sheet.headerValues

    const data = normalizeData(rows, headers)

    return { data: data as T[], error: null }
  } catch (error) {
    const err = error as Error

    return {
      data: [],
      error: err,
    }
  }
}

export const normalizeData = (
  rows: GoogleSpreadsheetRow<Record<string, unknown>>[],
  headers: string[],
) => {
  return rows.map((row) =>
    headers.reduce(
      (acc, header) => {
        acc[header] = row.get(header)
        return acc
      },
      {} as Record<string, unknown>,
    ),
  )
}
