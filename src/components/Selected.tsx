import { useState } from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css'
import { formatUrl } from '@/utils/formatUrl'

interface Props {
  rows: {
    work_area: string
    name: string
    social_media: string
  }[]
}

const separatorEmoji = ['🌱', '🍃', '🌿', '✨', '🍀', '⭐']

const categories = {
  illustration: {
    styles: {
      hover: 'text-secondary hover:bg-secondary bg-slate-200',
      active: 'bg-secondary text-secondary-foreground',
    },
    title: 'Ilustración',
  },
  manuals: {
    styles: {
      hover: 'text-accent hover:bg-accent bg-slate-200',
      active: 'bg-accent text-accent-foreground',
    },
    title: 'Manualidades',
  },
  graphic: {
    styles: {
      hover: 'text-primary hover:bg-primary bg-slate-200',
      active: 'bg-primary text-primary-foreground',
    },
    title: 'Narrativa Gráfica',
  },
  music: {
    styles: {
      hover: 'text-red-700 hover:bg-red-700 bg-slate-200',
      active: 'bg-red-700 text-background',
    },
    title: 'Música',
  },
}

export const Selected = ({ rows }: Props) => {
  const [filter, setFilter] = useState(categories.illustration.title)

  const artistList = rows.filter((row) => row.work_area === filter)

  const handleClick = (category: string) => {
    setFilter(category)
  }

  return (
    <>
      <nav className="pt-4 sm:py-4 sticky top-0 sm:top-8 flex">
        <Swiper slidesPerView="auto" spaceBetween={20} slideToClickedSlide>
          {Object.values(categories).map((category) => (
            <SwiperSlide key={category.title} className="max-w-fit !shrink-0">
              <button
                onClick={() => handleClick(category.title)}
                className={`w-fit h-full font-bold uppercase rounded-3xl transition-all duration-300 hover:text-background py-4 sm:py-6 px-6 sm:px-12 show-btn ${
                  filter === category.title
                    ? category.styles.active
                    : category.styles.hover
                }`}>
                <h2 className="text-2xl sm:text-3xl font-black whitespace-nowrap">
                  {category.title}
                </h2>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </nav>
      <section className="w-full h-full container mx-auto pt-10 pb-40">
        <ul className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-4 font-black justify-center text-4xl sm:text-5xl">
          {artistList.map((artist, i) => {
            const withSeparator = i !== artistList.length - 1
            const randomIndex = Math.floor(
              Math.random() * (separatorEmoji.length - 0)
            )
            const separator = separatorEmoji[randomIndex]
            const nick = artist.name
            const social_media = formatUrl(artist.social_media)

            return (
              <li
                key={nick}
                className="flex flex-col sm:flex-row items-center sm:gap-4 text-secondary text-center">
                <a
                  className="hover:bg-gradient-to-r from-secondary to-accent hover:text-background px-4 py-1 rounded-lg"
                  target="_blank"
                  href={social_media}>
                  {nick}
                </a>{' '}
                {withSeparator && <span className="text-3xl">{separator}</span>}
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}
