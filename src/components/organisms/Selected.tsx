import { useState } from 'react'

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

export const Selected = ({ rows }: Props) => {
  const [filter, setFilter] = useState(categories.illustration.title)

  const artistList = rows.filter(row => row.TrabajasEn === filter)

  const handleClick = (category: string) => {
    setFilter(category)
  }

  return (
    <>
      <nav className='flex space-x-4 py-10 sticky top-4'>
        {Object.values(categories).map(category => (
          <button
            key={category.title}
            onClick={() => handleClick(category.title)}
            className={`w-full h-full font-bold uppercase rounded-3xl flex items-center justify-center transition-all duration-300 hover:text-white py-6 show-btn ${
              filter === category.title
                ? category.styles.active
                : category.styles.hover
            }`}
          >
            <h2 className='text-3xl font-black'>{category.title}</h2>
          </button>
        ))}
      </nav>
      <section className='w-full h-full container mx-auto pt-10 pb-40'>
        <ul className='flex flex-wrap gap-4 font-black justify-center text-5xl'>
          {artistList.map((artist, i) => {
            const withSeparator = i !== artistList.length - 1
            const randomIndex = Math.floor(
              Math.random() * (separatorEmoji.length - 0)
            )
            const separator = separatorEmoji[randomIndex]
            const nick = artist.Nick
            const social_media = formatUrl(artist.SocialMedia)

            return (
              <li key={nick} className='flex items-center gap-4 text-orange'>
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
