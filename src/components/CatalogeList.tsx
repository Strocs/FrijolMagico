import type { Cataloge } from '@/interfaces/cataloge.d.ts'
import { CatalogeCard } from '@/components/CatalogeCard'
import { useCataloge } from '@/hooks/useCataloge'

interface CatalogeProps {
  list: Cataloge
}

export const CatalogeList = ({ list }: CatalogeProps) => {
  const { cataloge } = useCataloge(list)

  return (
    <ul className="flex gap-4 py-10 flex-wrap mx-auto w-full max-w-[calc(var(--card-width)*3+2rem)] [--card-width:24rem]">
      {cataloge.map((item) => (
        <CatalogeCard key={item.id} {...item} />
      ))}
    </ul>
  )
}
