import { useState } from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'

interface Props {
  rows: {
    TrabajasEn: string
    Nick: string
    SocialMedia: string
  }[]
}

function formatUrl (url: string) {
  url = url.trim().toLowerCase()
  if (/^(http:\/\/|https:\/\/|www\.)/.test(url)) {
    if (url.startsWith('http://')) {
      url = 'https://' + url.substring(7)
    } else if (url.startsWith('www.')) {
      url = 'https://' + url
    }
  } else {
    url = 'https://' + url
  }
  if (/^https:\/\/[\w.-]+(\.[\w.-]+)+/.test(url)) {
    return url
  }
  return '#'
}

const separatorEmoji = ['🌱', '🍃', '🌿', '✨', '🍀', '⭐']

const categories = {
  illustration: {
    styles: {
      hover: 'text-orange hover:bg-orange bg-white',
      active: 'bg-orange',
    },
    title: 'Ilustración',
  },
  manuals: {
    styles: {
      hover: 'text-yellow hover:bg-yellow bg-white',
      active: 'bg-yellow',
    },
    title: 'Manualidades',
  },
  graphic: {
    styles: {
      hover: 'text-light-green hover:bg-light-green bg-white',
      active: 'bg-light-green',
    },
    title: 'Narrativa Gráfica',
  },
  music: {
    styles: {
      hover: 'text-red-700 hover:bg-red-700 bg-white',
      active: 'bg-red-700',
    },
    title: 'Música',
  },
}
import 'swiper/css'
export const Selected = ({ rows }: Props) => {
  const [filter, setFilter] = useState(categories.illustration.title)

  const artistList = rows.filter(row => row.TrabajasEn === filter)

  const handleClick = (category: string) => {
    setFilter(category)
  }

  return (
    <>
      <nav className='pt-4 sm:py-10 sticky top-0 sm:top-4 flex'>
        <Swiper slidesPerView='auto' spaceBetween={20} slideToClickedSlide>
          {Object.values(categories).map(category => (
            <SwiperSlide className='max-w-fit !shrink-0'>
              <button
                key={category.title}
                onClick={() => handleClick(category.title)}
                className={`w-fit h-full font-bold uppercase rounded-3xl transition-all duration-300 hover:text-white py-4 sm:py-6 px-6 sm:px-12 show-btn ${
                  filter === category.title
                    ? category.styles.active
                    : category.styles.hover
                }`}
              >
                <h2 className='text-2xl sm:text-3xl font-black whitespace-nowrap'>
                  {category.title}
                </h2>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </nav>
      <section className='w-full h-full container mx-auto pt-10 pb-40'>
        <ul className='flex flex-col sm:flex-row sm:flex-wrap sm:gap-4 font-black justify-center text-4xl sm:text-5xl'>
          {artistList.map((artist, i) => {
            const withSeparator = i !== artistList.length - 1
            const randomIndex = Math.floor(
              Math.random() * (separatorEmoji.length - 0)
            )
            const separator = separatorEmoji[randomIndex]
            const nick = artist.Nick
            const social_media = formatUrl(artist.SocialMedia)

            return (
              <li
                key={nick}
                className='flex flex-col sm:flex-row items-center sm:gap-4 text-orange text-center'
              >
                <a
                  className='hover:bg-gradient-to-r from-orange to-yellow hover:text-white px-4 py-1 rounded-lg'
                  target='_blank'
                  href={social_media}
                >
                  {nick}
                </a>{' '}
                {withSeparator && <span className='text-3xl'>{separator}</span>}
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}
