import { CMSConfig } from '@/infra/getDataFromCMS'

export const CATALOG_CONFIG: CMSConfig = {
  sheetIndex: 0,
  startRow: 1,
  sheetId: process.env.CATALOG_SHEET_ID,
}
