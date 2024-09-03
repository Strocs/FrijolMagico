import { cn } from '@/lib/utils'
import {
  $isArtistPanelOpen,
  $selectedCataloge,
  setArtistPanelOpen,
} from '@/store/cataloge'
import { getInstagramUserTag } from '@/utils/getInstagramUserTag'
import { useStore } from '@nanostores/react'
import { Instagram, Mail } from 'lucide-react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

export const CatalogePanel = () => {
  const isOpen = useStore($isArtistPanelOpen)

  const { name, work_area, bio, rrss, avatar, city, email } =
    useStore($selectedCataloge)

  function handleClosePanel() {
    setArtistPanelOpen(false)
  }

  function handleOpenImage() {
    //TODO: Implement zoom to avatar
  }

  return (
    <div
      className={cn([
        '[--max-width:488px] ',
        'fixed sm:relative z-50',
        'w-full max-w-[--max-width]',
        'transition-[margin-right,right] duration-500',
        isOpen
          ? 'right-0 sm:mr-4'
          : '-right-[--max-width] sm:-mr-[--max-width]',
      ])}>
      <aside
        className={cn([
          'fixed bottom-0 top-0 sm:top-[10%]',
          'w-full h-full max-w-[--max-width] sm:max-h-[84vh] space-y-4 p-8',
          'transition-[opacity] duration-500 bg-white text-primary sm:rounded-2xl',
          isOpen ? 'opacity-1' : '',
        ])}>
        <header className="flex items-center gap-x-4">
          <div
            onClick={handleOpenImage}
            className="rounded-full w-28 sm:w-36 aspect-square bg-zinc-600 shrink-0"
          />

          <div className="space-y-2">
            <h2 className="text-4xl font-bold">{name}</h2>

            <div className="space-x-2">
              <Badge className="text-sm bg-secondary hover:bg-foreground text-secondary-foreground">
                {work_area}
              </Badge>
              <Badge className="text-sm bg-primary hover:bg-foreground text-secondary-foreground">
                {city}
              </Badge>
            </div>
          </div>
        </header>

        <p className="font-medium xl:text-sm 2xl:text-base">{bio}</p>

        <footer>
          <h3 className="text-xl font-bold mb-2">Contacto</h3>
          <a
            target="_blank"
            href={'mailto:' + email}
            className="inline-flex gap-x-2 hover:text-secondary transition duration-150">
            <Mail className="shrink-0" /> {email.toLowerCase()}
          </a>
          <a
            target="_blank"
            href={rrss}
            className="inline-flex gap-x-2 hover:text-secondary transition duration-150">
            <Instagram className="shrink-0" /> {getInstagramUserTag(rrss)}
          </a>
        </footer>

        <Button
          size="sm"
          className={cn([
            'absolute bottom-8 right-8 sm:left-8 sm:right-auto',
            'bg-secondary  hover:bg-primary transition duration-300 text-secondary-foreground shrink-0',
          ])}
          onClick={handleClosePanel}>
          Cerrar
        </Button>
      </aside>
    </div>
  )
}
