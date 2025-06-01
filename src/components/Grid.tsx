import { Selector } from '@/types/media-queries'
import { classVariantSelector } from '@/utils/classVariantSelector'
import clsx from 'clsx'

interface Props {
  container?: boolean
  children: React.ReactNode
  row?: Selector
  col?: Selector
  className?: string
}

export const Grid = ({
  container = false,
  children,
  row = { base: 1 },
  col = { base: 1 },
  className,
}: Props) => {
  return (
    <section
      className={clsx(
        'relative grid',
        container && 'container',
        classVariantSelector({
          variants: gridTemplateVariants.row,
          selector: row,
        }),
        classVariantSelector({
          variants: gridTemplateVariants.col,
          selector: col,
        }),
        className,
      )}>
      {children}
    </section>
  )
}

const gridTemplateVariants = {
  row: {
    base: [
      'grid-rows-1',
      'grid-rows-2',
      'grid-rows-3',
      'grid-rows-4',
      'grid-rows-5',
      'grid-rows-6',
      'grid-rows-7',
      'grid-rows-8',
      'grid-rows-9',
      'grid-rows-10',
    ],
    sm: [
      'sm:grid-rows-1',
      'sm:grid-rows-2',
      'sm:grid-rows-3',
      'sm:grid-rows-4',
      'sm:grid-rows-5',
      'sm:grid-rows-6',
      'sm:grid-rows-7',
      'sm:grid-rows-8',
      'sm:grid-rows-9',
      'sm:grid-rows-10',
    ],
    md: [
      'md:grid-rows-1',
      'md:grid-rows-2',
      'md:grid-rows-3',
      'md:grid-rows-4',
      'md:grid-rows-5',
      'md:grid-rows-6',
      'md:grid-rows-7',
      'md:grid-rows-8',
      'md:grid-rows-9',
      'md:grid-rows-10',
    ],
    lg: [
      'lg:grid-rows-1',
      'lg:grid-rows-2',
      'lg:grid-rows-3',
      'lg:grid-rows-4',
      'lg:grid-rows-5',
      'lg:grid-rows-6',
      'lg:grid-rows-7',
      'lg:grid-rows-8',
      'lg:grid-rows-9',
      'lg:grid-rows-10',
    ],
    xl: [
      'xl:grid-rows-1',
      'xl:grid-rows-2',
      'xl:grid-rows-3',
      'xl:grid-rows-4',
      'xl:grid-rows-5',
      'xl:grid-rows-6',
      'xl:grid-rows-7',
      'xl:grid-rows-8',
      'xl:grid-rows-9',
      'xl:grid-rows-10',
    ],
  },
  col: {
    base: [
      'grid-cols-1',
      'grid-cols-2',
      'grid-cols-3',
      'grid-cols-4',
      'grid-cols-5',
      'grid-cols-6',
      'grid-cols-7',
      'grid-cols-8',
      'grid-cols-9',
      'grid-cols-10',
    ],
    sm: [
      'sm:grid-cols-1',
      'sm:grid-cols-2',
      'sm:grid-cols-3',
      'sm:grid-cols-4',
      'sm:grid-cols-5',
      'sm:grid-cols-6',
      'sm:grid-cols-7',
      'sm:grid-cols-8',
      'sm:grid-cols-9',
      'sm:grid-cols-10',
    ],
    md: [
      'md:grid-cols-1',
      'md:grid-cols-2',
      'md:grid-cols-3',
      'md:grid-cols-4',
      'md:grid-cols-5',
      'md:grid-cols-6',
      'md:grid-cols-7',
      'md:grid-cols-8',
      'md:grid-cols-9',
      'md:grid-cols-10',
    ],
    lg: [
      'lg:grid-cols-1',
      'lg:grid-cols-2',
      'lg:grid-cols-3',
      'lg:grid-cols-4',
      'lg:grid-cols-5',
      'lg:grid-cols-6',
      'lg:grid-cols-7',
      'lg:grid-cols-8',
      'lg:grid-cols-9',
      'lg:grid-cols-10',
    ],
    xl: [
      'xl:grid-cols-1',
      'xl:grid-cols-2',
      'xl:grid-cols-3',
      'xl:grid-cols-4',
      'xl:grid-cols-5',
      'xl:grid-cols-6',
      'xl:grid-cols-7',
      'xl:grid-cols-8',
      'xl:grid-cols-9',
      'xl:grid-cols-10',
    ],
  },
}
