export const ErrorSection = ({ error }: { error: string | null }) => {
  return (
    <div className='ml-3 w-full'>
      <p className='text-fm-white mx-auto w-fit rounded-xl bg-red-700/75 px-8 py-2 text-center text-lg leading-none'>
        {error ||
          'Sucedió un error inesperado. Por favor, intente nuevamente más tarde.'}
      </p>
    </div>
  )
}
