import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import siteData from '@/data/site.json'
import { cn } from '@/lib/utils'
import { paths } from '@/config/paths'
const { top_bar } = siteData

export const TopBarInfo = () => {
  return (
    <section
      aria-label='Frijol Mágico'
      className='bg-fm-dark relative z-40 flex w-full flex-col items-center justify-between space-y-4 px-4 py-4 font-sans sm:flex-row sm:px-6 sm:py-2 md:top-0 md:space-y-0'>
      <div className='flex flex-nowrap space-x-4'>
        <h2 className='text-fm-white 2md:max-w-fit 2md:leading-normal w-full text-center leading-none'>
          <ReactMarkdown
            components={{
              p: ({ children }) => <>{children}</>,
            }}>
            {top_bar.text}
          </ReactMarkdown>
        </h2>
      </div>
      <Link
        href={top_bar.button.active ? paths.apply : '#'}
        className={cn(
          'text-fm-white from-fm-orange to-fm-yellow rounded-lg bg-gradient-to-r [background-size:150%] px-4 py-0.5 font-bold transition-[background-position] duration-200 hover:bg-right',
          top_bar.button.active
            ? 'cursor-pointer'
            : 'cursor-not-allowed opacity-75',
        )}>
        {top_bar.button.text}
      </Link>
    </section>
  )
}
