import { useStore } from '@nanostores/react'
import { $selectedCataloge } from '@/store/cataloge'
import { Instagram, Mail } from 'lucide-react'
import { Badge } from './ui/badge'
import { getInstagramUserTag } from '@/utils/getInstagramUserTag'

export const CatalogePanelContent = () => {
  const { name, avatar, work_area, city, email, bio, rrss } =
    useStore($selectedCataloge)

  return (
    <>
      <header className="flex items-center gap-x-4">
        <img
          loading="eager"
          alt={`Imagen de ${name}`}
          src={avatar}
          className="rounded-full overflow-hidden w-28 lg:w-36 aspect-square object-cover bg-zinc-600 shrink-0"
        />

        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold">{name}</h2>

          <div className="flex gap-2 flex-wrap">
            <Badge className="text-sm shrink-0 bg-secondary hover:bg-foreground text-secondary-foreground">
              {work_area}
            </Badge>
            <Badge className="text-sm shrink-0 bg-primary hover:bg-foreground text-secondary-foreground">
              {city}
            </Badge>
          </div>
        </div>
      </header>

      <p className="font-medium xl:text-sm 2xl:text-base">{bio}</p>

      <footer className="grid gap-2">
        <h3 className="text-xl font-bold">Contacto</h3>

        <a
          target="_blank"
          href={'mailto:' + email}
          className="inline-flex w-fit gap-x-2 hover:text-secondary transition duration-150">
          <Mail className="shrink-0" /> {email.toLowerCase()}
        </a>

        <a
          target="_blank"
          href={rrss}
          className="inline-flex w-fit gap-x-2 hover:text-secondary transition duration-150">
          <Instagram className="shrink-0" /> {getInstagramUserTag(rrss)}
        </a>
      </footer>
    </>
  )
}
