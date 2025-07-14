import { normalizeString } from '@/lib/utils'

export const parseParamArray = (param?: string | null) =>
  param && param.length > 0 ? param.split(',').filter(Boolean).map(normalizeString) : []

export const dedupeArray = (arr: string[]) => Array.from(new Set(arr.map(normalizeString)))
