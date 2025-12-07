import { CMSConfig } from '@/infra/getDataFromCMS'

export const SCHEDULE_CONFIG: CMSConfig = {
  sheetIndex: [1, 2],
  startRow: 3,
  sheetId: process.env.FESTIVAL_2025_SCHEDULE_SHEET_ID,
}
