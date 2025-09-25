import { CMSConfig } from '@/lib/getDataFromCMS'

export const APPROVED_ARTISTS_CONFIG: CMSConfig = {
  sheetIndex: 0,
  startRow: 1,
  sheetId: process.env.APPROVED_ARTISTS_SHEET_ID,
}
