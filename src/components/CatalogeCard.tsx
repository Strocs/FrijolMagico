import type { CatalogeArtist } from '@/interfaces/cataloge.d.ts'
import { formatUrl } from '@/utils/formatUrl'
import { Instagram, Mail } from 'lucide-react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import {
  $selectedCataloge,
  setArtistPanelOpen,
  setSelectedArtist,
} from '@/store/cataloge'
import { useStore } from '@nanostores/react'

export const CatalogeCard = ({
  id,
  avatar,
  name,
  city,
  work_area,
  bio,
  email,
  rrss,
}: CatalogeArtist) => {
  const rrssUrl = formatUrl(rrss)

  const { id: selectedId } = useStore($selectedCataloge)

  const isSelected = id === selectedId

  function handleViewMoreButton() {
    setSelectedArtist({
      id,
      avatar,
      name,
      city,
      work_area,
      bio,
      email,
      rrss,
    })

    setArtistPanelOpen(true)
  }

  return (
    <li
      className={`text-background cursor-default group bg-gradient-to-br from-secondary to-accent [background-size:250%] hover:bg-right-bottom ${isSelected ? 'bg-right-bottom scale-105' : ''} transition-all duration-300 p-4 rounded-xl relative space-y-6`}>
      <section className="flex gap-4 items-center">
        <div className="bg-slate-300 rounded-full w-12 h-12" />
        <section className="space-y-0.5">
          <h2 className="text-xl font-bold ml-1">{name}</h2>
          <div className="flex gap-2">
            <Badge className="bg-secondary hover:bg-foreground text-secondary-foreground">
              {work_area}
            </Badge>
            <Badge className="bg-accent hover:bg-foreground text-accent-foreground">
              {city}
            </Badge>
          </div>
        </section>
      </section>
      <section className="text-sm">
        <section className="flex gap-2 w-full items-center">
          <b>Contacto:</b>
          <a href={rrssUrl} className="hover:scale-105" target="_blank">
            <Instagram size={22} />
          </a>
          <a href={`mailto:${email}`} className="hover:scale-105">
            <Mail />
          </a>
        </section>

        <Button
          onClick={handleViewMoreButton}
          size="sm"
          className={`absolute right-4 bottom-4 rotate-6 outline outline-background group-hover:rotate-0 ${isSelected ? 'rotate-0 bg-primary' : 'bg-secondary'} hover:bg-foreground transition duration-300 text-secondary-foreground shrink-0`}>
          Ver más
        </Button>
      </section>
    </li>
  )
}
