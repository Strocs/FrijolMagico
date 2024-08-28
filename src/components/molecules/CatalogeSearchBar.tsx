import { useState } from 'react'
import { Input } from '../ui/input'
import { searchArtist } from '@/store/cataloge'

export const CatalogeSearchBar = () => {
  const [inputValue, setInputValue] = useState('')

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()

    if (!e.target) return

    setInputValue(e.target.value)
    searchArtist(e.target.value)
  }

  return (
    <Input
      type="text"
      onChange={handleInput}
      value={inputValue}
      placeholder="Busca a tu ilustrador favorito"
    />
  )
}
