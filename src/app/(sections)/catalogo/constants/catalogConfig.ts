import { CMSConfig } from '@/lib/getDataFromCMS'

export const CATALOG_CONFIG: CMSConfig = {
  sheetIndex: 1,
  startRow: 1,
  sheetId: process.env.FESTIVAL_2025_SCHEDULE_SHEET_ID,
}
