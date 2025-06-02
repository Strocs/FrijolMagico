import { GoogleSpreadsheet } from 'google-spreadsheet'
import type { Catalog, CatalogArtist } from '@/types/catalog'

const CATALOG_HEADER_INFO = {
  ID: 'id',
  NAME: 'name',
  CITY: 'city',
  WORK_AREA: 'work_area',
  BIO: 'bio',
  EMAIL: 'email',
  RRSS: 'rrss',
  AVATAR: 'avatar',
} as const

// Initialize the Google Spreadsheet
export async function getCatalogData(): Promise<CatalogArtist[]> {
  if (!process.env.CATALOG_SHEET_ID || !process.env.GOOGLE_API_KEY) {
    console.error('Missing Google Sheets configuration')
    return []
  }

  try {
    const doc = new GoogleSpreadsheet(process.env.CATALOG_SHEET_ID, {
      apiKey: process.env.GOOGLE_API_KEY,
    })

    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[0]
    const rows = await sheet.getRows()

    // Process the rows into our Catalog format
    const catalogPromises = rows.map(async (row) => ({
      id: row.get(CATALOG_HEADER_INFO.ID) || '',
      name: row.get(CATALOG_HEADER_INFO.NAME) || '',
      city: row.get(CATALOG_HEADER_INFO.CITY) || '',
      work_area: row.get(CATALOG_HEADER_INFO.WORK_AREA) || '',
      bio: row.get(CATALOG_HEADER_INFO.BIO) || '',
      email: row.get(CATALOG_HEADER_INFO.EMAIL) || '',
      rrss: row.get(CATALOG_HEADER_INFO.RRSS) || '',
      avatar: row.get(CATALOG_HEADER_INFO.AVATAR) || ''
    }))

    return await Promise.all(catalogPromises)
  } catch (error) {
    console.error('Error fetching catalog data:', error)
    return []
  }
}

// For development/testing when Google Sheets isn't available
export const getMockCatalogData = (): Catalog => {
  return [
    {
      id: '1',
      name: 'María González',
      city: 'La Serena',
      work_area: 'Ilustración Digital',
      bio: 'Artista digital especializada en ilustración de personajes y mundos de fantasía. Con más de 5 años de experiencia en la industria.',
      email: 'maria.gonzalez@ejemplo.com',
      rrss: 'https://instagram.com/mariag_ilustra?param=1',
      avatar: 'placeholder-avatar.svg',
    },
    {
      id: '2',
      name: 'Carlos Muñoz',
      city: 'Coquimbo',
      work_area: 'Diseño Gráfico',
      bio: 'Diseñador gráfico con amplia experiencia en branding y diseño editorial. Apasionado por la tipografía y el diseño limpio y funcional.',
      email: 'carlos.munoz@ejemplo.com',
      rrss: 'https://instagram.com/carlos_diseno',
      avatar: 'placeholder-avatar.svg',
    },
    {
      id: '3',
      name: 'Ana Rojas',
      city: 'Ovalle',
      work_area: 'Acuarela',
      bio: 'Artista plástica especializada en acuarela. Mis obras exploran la naturaleza y la relación del ser humano con su entorno.',
      email: 'ana.rojas@ejemplo.com',
      rrss: 'https://instagram.com/ana_acuarelas?param=1',
      avatar: 'placeholder-avatar.svg',
    },
    {
      id: '4',
      name: 'Diego Silva',
      city: 'La Serena',
      work_area: 'Muralismo',
      bio: 'Muralista urbano con más de 10 años de experiencia. Mis obras se centran en la identidad local y la cultura de la región de Coquimbo.',
      email: 'diego.silva@ejemplo.com',
      rrss: 'https://instagram.com/diego_murales',
      avatar: 'placeholder-avatar.svg',
    },
    {
      id: '5',
      name: 'Valentina Muñoz',
      city: 'Coquimbo',
      work_area: 'Ilustración Infantil',
      bio: 'Ilustradora especializada en literatura infantil. Creo mundos mágicos y personajes entrañables para los más pequeños.',
      email: 'valentina.munoz@ejemplo.com',
      rrss: 'https://instagram.com/valen_ilustra',
      avatar: 'placeholder-avatar.svg',
    },
    {
      id: '6',
      name: 'Lucas Parra',
      city: 'La Serena',
      work_area: 'Ilustración Digital',
      bio: 'Artista digital especializado en ilustración de personajes y mundos de fantasía. Con más de 5 años de experiencia en la industria.',
      email: 'lucas.parra@ejemplo.com',
      rrss: 'https://instagram.com/lucas_ilustra',
      avatar: 'placeholder-avatar.svg',
    },
    {
      id: '7',
      name: 'Sofía Sánchez',
      city: 'Coquimbo',
      work_area: 'Diseño Gráfico',
      bio: 'Diseñadora gráfica con amplia experiencia en branding y diseño editorial. Apasionada por la tipografía y el diseño limpio y funcional.',
      email: 'sofia.sanchez@ejemplo.com',
      rrss: 'https://instagram.com/sofia_diseno',
      avatar: 'placeholder-avatar.svg',
    },
    {
      id: '9',
      name: 'María Pizarro',
      city: 'La Serena',
      work_area: 'Ilustración Digital',
      bio: 'Artista digital especializada en ilustración de personajes y mundos de fantasía. Con más de 5 años de experiencia en la industria.',
      email: 'maria.pizarro@ejemplo.com',
      rrss: 'https://instagram.com/maria_ilustra',
      avatar: 'placeholder-avatar.svg',
    },
    {
      id: '10',
      name: 'Sebastián Muñoz',
      city: 'Coquimbo',
      work_area: 'Diseño Gráfico',
      bio: 'Diseñador gráfico con amplia experiencia en branding y diseño editorial. Apasionado por la tipografía y el diseño limpio y funcional.',
      email: 'sebastian.munoz@ejemplo.com',
      rrss: 'https://instagram.com/sebastian_diseno',
      avatar: 'placeholder-avatar.svg',
    },
    {
      id: '11',
      name: 'Lucas Valdivia',
      city: 'Ovalle',
      work_area: 'Acuarela',
      bio: 'Artista plástico especializado en acuarela. Mis obras exploran la naturaleza y la relación del ser humano con su entorno.',
      email: 'lucas.valdivia@ejemplo.com',
      rrss: 'https://instagram.com/lucas_acuarelas',
      avatar: 'placeholder-avatar.svg',
    },
    {
      id: '12',
      name: 'Catalina Soto',
      city: 'La Serena',
      work_area: 'Ilustración Infantil',
      bio: 'Ilustradora especializada en literatura infantil. Creo mundos mágicos y personajes entrañables para los más pequeños.',
      email: 'catalina.soto@ejemplo.com',
      rrss: 'https://instagram.com/catalina_ilustra',
      avatar: 'placeholder-avatar.svg',
    },
    {
      id: '13',
      name: 'Felipe Fuentes',
      city: 'Coquimbo',
      work_area: 'Muralismo',
      bio: 'Muralista urbano con más de 10 años de experiencia. Mis obras se centran en la identidad local y la cultura de la región de Coquimbo.',
      email: 'felipe.fuentes@ejemplo.com',
      rrss: 'https://instagram.com/felipe_murales',
      avatar: 'placeholder-avatar.svg',
    },
    {
      id: '14',
      name: 'Sofía Reyes',
      city: 'Ovalle',
      work_area: 'Ilustración Digital',
      bio: 'Artista digital especializada en ilustración de personajes y mundos de fantasía. Con más de 5 años de experiencia en la industria.',
      email: 'sofia.reyes@ejemplo.com',
      rrss: 'https://instagram.com/sofia_ilustra',
      avatar: 'placeholder-avatar.svg',
    },
    {
      id: '15',
      name: 'María Jesús González',
      city: 'La Serena',
      work_area: 'Diseño Gráfico',
      bio: 'Diseñadora gráfica con amplia experiencia en branding y diseño editorial. Apasionada por la tipografía y el diseño limpio y funcional.',
      email: 'mariajesus.gonzalez@ejemplo.com',
      rrss: 'https://instagram.com/mariajesus_diseno',
      avatar: 'placeholder-avatar.svg',
    },
    {
      id: '16',
      name: 'Carolina Rojas',
      city: 'Ovalle',
      work_area: 'Ilustración Infantil',
      bio: 'Artista digital especializada en ilustración de personajes y mundos de fantasía. Con más de 5 años de experiencia en la industria.',
      email: 'maria.paz.gonzalez@ejemplo.com',
      rrss: 'https://instagram.com/maria.paz_ilustra',
      avatar: 'placeholder-avatar.svg',
    },
    {
      id: '19',
      name: 'Sofía Sánchez',
      city: 'Coquimbo',
      work_area: 'Diseño Gráfico',
      bio: 'Diseñadora gráfica con amplia experiencia en branding y diseño editorial. Apasionada por la tipografía y el diseño limpio y funcional.',
      email: 'sofia.sanchez@ejemplo.com',
      rrss: 'https://instagram.com/sofia_diseno',
      avatar: 'placeholder-avatar.svg',
    },
    {
      id: '20',
      name: 'Cristóbal Soto',
      city: 'Ovalle',
      work_area: 'Acuarela',
      bio: 'Artista plástico especializado en acuarela. Mis obras exploran la naturaleza y la relación del ser humano con su entorno.',
      email: 'cristobal.soto@ejemplo.com',
      rrss: 'https://instagram.com/cristobal_acuarelas',
      avatar: 'placeholder-avatar.svg',
    },
    {
      id: '21',
      name: 'Lucas Parra',
      city: 'La Serena',
      work_area: 'Ilustración Infantil',
      bio: 'Ilustrador especializado en literatura infantil. Creo mundos mágicos y personajes entrañables para los más pequeños.',
      email: 'lucas.parra@ejemplo.com',
      rrss: 'https://instagram.com/lucas_ilustra',
      avatar: 'placeholder-avatar.svg',
    },
    {
      id: '22',
      name: 'María Alejandra Rojas',
      city: 'Coquimbo',
      work_area: 'Ilustración Digital',
      bio: 'Artista digital especializada en ilustración de personajes y mundos de fantasía. Con más de 5 años de experiencia en la industria.',
      email: 'maria.alejandra.rojas@ejemplo.com',
      rrss: 'https://instagram.com/maria.alejandra_ilustra',
      avatar: 'placeholder-avatar.svg',
    },
  ]
}
