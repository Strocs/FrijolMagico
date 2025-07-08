import React from 'react'

export const CatalogCardLoader = () => {
  return (
    <div className='w-full'>
      <ul className='mx-auto flex w-full max-w-[calc(var(--card-width)*3+2rem)] flex-wrap justify-center gap-4 py-4 [--card-width:24rem]'>
        {[...Array(11)].map((_, i) => (
          <li
            key={i}
            className='bg-fm-black/10 relative flex h-[130px] w-full animate-pulse flex-col items-center justify-center rounded-xl sm:max-w-xs lg:max-w-sm'></li>
        ))}
      </ul>
    </div>
  )
}

export const CatalogFiltersBarLoader = () => {
  return (
    <div className='flex flex-wrap justify-center gap-4'>
      <div className='bg-fm-black/10 flex h-8 w-28 animate-pulse rounded-xl px-3 py-1.5'></div>
      <div className='bg-fm-black/10 flex h-8 w-28 animate-pulse rounded-xl px-3 py-1.5'></div>
    </div>
  )
}

export const CatalogSearchBarLoader = () => {
  return (
    <div className='bg-fm-black/10 h-8 w-full max-w-md animate-pulse rounded-xl px-3' />
  )
}

export const CatalogSearchSectionLoader = () => {
  return (
    <>
      <section className='flex w-full flex-col justify-center gap-4 pb-6 sm:flex-row'>
        <CatalogSearchBarLoader />
        <CatalogFiltersBarLoader />
      </section>
    </>
  )
}
