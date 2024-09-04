import { Input } from '@/components/ui/input'
import { $searchValue, setSearchValue } from '@/store/cataloge'
import { useStore } from '@nanostores/react'

export const CatalogeSearchBar = () => {
  const searchValue = useStore($searchValue)

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()

    if (!e.target) return

    setSearchValue(e.target.value)
  }

  return (
    <Input
      type="text"
      onChange={handleInput}
      value={searchValue}
      placeholder="Busca a tu artista favorito/a"
      className="rounded-xl h-8 border-dashed shrink-0 max-w-sm"
    />
  )
}
