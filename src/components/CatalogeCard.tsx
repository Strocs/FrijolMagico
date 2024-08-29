import type { CatalogeArtist } from '@/interfaces/cataloge.d.ts'
import { formatUrl } from '@/utils/formatUrl'
import { Instagram, Mail } from 'lucide-react'

export const CatalogeCard = ({
  avatar,
  name,
  city,
  work_area,
  bio,
  email,
  rrss,
}: CatalogeArtist) => {
  const rrssUrl = formatUrl(rrss)

  return (
    <li className="cursor-default group bg-gradient-to-br from-orange to-yellow [background-size:250%] hover:bg-right-bottom  transition-all duration-300 p-4 rounded-xl relative space-y-6">
      <section className="flex gap-4 items-center">
        <div className="bg-slate-300 rounded-full w-12 h-12" />
        <section className="space-y-0.5">
          <h2 className="text-xl font-bold ml-1">{name}</h2>
          <div className="flex gap-2">
            <span className="bg-orange rounded px-2 font-semibold text-sm">
              {work_area}
            </span>
            <span className="bg-yellow rounded px-2 font-semibold text-sm">
              {city}
            </span>
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

        <button className="absolute right-4 bottom-4 rotate-6 outline outline-white font-semibold group-hover:rotate-0 hover:bg-white hover:text-neutral-800 transition duration-300 bg-orange text-white px-4 py-0.5 rounded-lg shrink-0">
          Ver más
        </button>
      </section>
    </li>
  )
}
