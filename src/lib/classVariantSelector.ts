import type { Selector } from '@/types/media-queries'

interface Variants {
  base: string[]
  sm: string[]
  md: string[]
  lg: string[]
  xl: string[]
}

interface Props {
  variants: Variants
  selector: Selector
}

export const classVariantSelector = ({ variants, selector }: Props) => {
  const selectorEntries = Object.entries(selector)

  return selectorEntries
    .map(([key, value]) => {
      // -1 because the array is 0-indexed and the selector is 1-indexed
      return variants[key as keyof Variants][value - 1]
    })
    .join(' ')
}
