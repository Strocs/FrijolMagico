import {
  $isArtistPanelOpen,
  $selectedCataloge,
  setArtistPanelOpen,
} from '@/store/cataloge'
import { Button } from './ui/button'
import { useStore } from '@nanostores/react'
import { Badge } from './ui/badge'
import { Instagram, Mail } from 'lucide-react'

export const CatalogePanel = () => {
  const isOpen = useStore($isArtistPanelOpen)

  const { id, name, work_area, bio, rrss, avatar, city, email } =
    useStore($selectedCataloge)

  function handleClosePanel() {
    setArtistPanelOpen(false)
  }

  function handleOpenImage() {}

  //TODO: fix animation

  export function getInstagramUsername(instagramURL: string) {
    return instagramURL.toLowerCase().split('.com/')
  }

  return (
    <div
      className={`${isOpen ? 'w-full' : 'w-0'} transition-[width] duration-500  max-w-[500px] relative ml-4 mt-[--top-bar-info-height] h-[calc(100dvh-var(--top-bar-info-height))] place-content-center`}>
      <aside
        className={` ${isOpen ? 'space-y-4 opacity-1 right-4' : 'opacity-0 -right-full'} max-w-[500px] transition-[opacity,right] duration-500 p-8 bg-gradient-to-br from-secondary to-accent text-background rounded-2xl max-h-[80%] h-full fixed bottom-[10%] top-[10%]`}>
        <header className="flex items-center gap-4">
          <div
            onClick={handleOpenImage}
            className="rounded-full w-28 aspect-square  bg-zinc-600 shrink-0"
          />
          <div className="space-y-2">
            <h2 className="text-4xl font-bold">{name}</h2>
            <div className="space-x-2">
              <Badge className="text-sm bg-primary hover:bg-foreground text-secondary-foreground">
                {work_area}
              </Badge>
              <Badge className="text-sm bg-primary hover:bg-foreground text-secondary-foreground">
                {city}
              </Badge>
            </div>
          </div>
        </header>
        <p className="font-medium">{bio}</p>

        <footer>
          <h3 className="text-xl font-bold">Contacto</h3>
          <a href="" className="inline-flex gap-x-2">
            <Mail className="shrink-0" /> {email.toLowerCase()}
          </a>
          <a href="" className="inline-flex gap-x-2">
            <Instagram className="shrink-0" /> {rrss}
          </a>
        </footer>
        <Button
          size="sm"
          className={`absolute bottom-8 left-8 bg-secondary outline outline-background  hover:bg-primary transition duration-300 text-secondary-foreground shrink-0`}
          onClick={handleClosePanel}>
          Cerrar
        </Button>
      </aside>
    </div>
  )
}
