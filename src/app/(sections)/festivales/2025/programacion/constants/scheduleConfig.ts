import { CMSConfig } from '@/lib/getDataFromCMS'

export const SCHEDULE_CONFIG: CMSConfig = {
  sheetIndex: [2, 3],
  startRow: 3,
  sheetId: process.env.FESTIVAL_2025_SCHEDULE_SHEET_ID,
}
