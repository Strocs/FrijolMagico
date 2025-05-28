import { useStore } from '@nanostores/react'
import { $isArtistPanelOpen, setArtistPanelOpen } from '@/store/cataloge'
import { cn } from '@/lib/utils'
import { CatalogePanelContent } from './cataloge-panel-content'
import { Button } from './ui/button'

export const CatalogePanel = () => {
  const isOpen = useStore($isArtistPanelOpen)

  function handleClosePanel() {
    setArtistPanelOpen(false)
  }

  return (
    <div
      aria-hidden="true"
      className={cn([
        'fixed h-screen right-0 md:right-4 top-0 z-50',
        'w-full max-w-[--panel-width]',
        'transition-transform transform-gpu duration-500',
        isOpen ? 'translate-x-0' : 'translate-x-full',
      ])}>
      <aside
        className={cn([
          'relative sm:landscape:mt-[10vh] sm:mt-[25%]',
          'w-full h-full max-w-[--panel-width] md:landscape:max-h-[84vh] sm:max-h-[80vh] lg:max-h-[60vh] space-y-4 p-8',
          'transition-[opacity] duration-500 bg-slate-200 text-primary sm:rounded-2xl',
          isOpen ? 'opacity-1' : 'opacity-0',
        ])}>
        <CatalogePanelContent />
        <Button
          size="sm"
          className={cn([
            'absolute z-50 bottom-8 right-8 lg:left-8 lg:right-auto',
            'bg-secondary hover:bg-primary transition duration-300 text-secondary-foreground shrink-0',
          ])}
          onClick={handleClosePanel}>
          Cerrar
        </Button>
      </aside>
    </div>
  )
}
