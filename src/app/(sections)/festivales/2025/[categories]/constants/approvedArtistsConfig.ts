import { CMSConfig } from '@/lib/getDataFromCMS'

export const APPROVED_ARTISTS_CONFIG: CMSConfig = {
  sheetIndex: 1,
  startRow: 1,
  sheetId: process.env.APPROVED_ARTISTS_SHEET_ID,
}
