import type { Cataloge } from '@/interfaces/cataloge.d.ts'
import { CatalogeCard } from './CatalogeCard'
import { useStore } from '@nanostores/react'
import { $cataloge, $catalogeOriginal } from '@/store/cataloge'
import { useEffect } from 'react'

interface CatalogeProps {
  list: Cataloge
}

export const CatalogeList = ({ list }: CatalogeProps) => {
  useEffect(() => {
    $cataloge.set(list)
    $catalogeOriginal.set(list)
  }, [])

  const cataloge = useStore($cataloge)

  // render cataloge with list when is from server then hydrate it with store
  const renderedCataloge = !cataloge ? list : cataloge

  return (
    <ul className="flex gap-4 py-10 flex-wrap">
      {renderedCataloge.map((item) => (
        <CatalogeCard key={item.name} {...item} />
      ))}
    </ul>
  )
}
