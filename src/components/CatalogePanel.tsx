import {
  $isArtistPanelOpen,
  $selectedCataloge,
  setArtistPanelOpen,
} from '@/store/cataloge'
import { Button } from './ui/button'
import { useStore } from '@nanostores/react'

export const CatalogePanel = () => {
  const isOpen = useStore($isArtistPanelOpen)

  const { id, name, work_area, bio, rrss, avatar, city, email } =
    useStore($selectedCataloge)

  function handleClosePanel() {
    setArtistPanelOpen(false)
  }

  return (
    isOpen && (
      <div className="w-full max-w-[400px] relative mr-4">
        <aside className="p-4 bg-accent rounded-xl sticky top-14">
          <h2>{name}</h2>
          <p>{bio}</p>
          <Button onClick={handleClosePanel}>Cerrar</Button>
        </aside>
      </div>
    )
  )
}
