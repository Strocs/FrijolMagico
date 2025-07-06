export const ErrorSection = ({ error }: { error: string }) => {
  return (
    <main className='container mx-auto px-4 py-8'>
      <div className='mb-6 border-l-4 border-red-500 bg-red-50 p-4'>
        <div className='flex'>
          <div className='flex-shrink-0'>
            <svg
              className='h-5 w-5 text-red-500'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 0L6 8.586 4.707 7.293a1 1 0 00-1.414 1.414L4.586 10l-1.293 1.293a1 1 0 101.414 1.414L6 11.414l1.293 1.293a1 1 0 001.414-1.414L7.414 10l1.293-1.293a1 1 0 000-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='ml-3'>
            <p className='text-sm text-red-700'>{error}</p>
          </div>
        </div>
      </div>
    </main>
  )
}
