import { Categories } from '@/types/artists'
import {
  getRandomName,
  getRandomInstagram,
} from '@/infra/__mocks__/mockDataUtils'
import { RawCatalogArtist } from '../../types/catalog'

const quantitys: number[] = [30, 10, 10]

export const getDataFromCatalogMock = (): RawCatalogArtist[] => {
  return [
    ...Array.from({ length: quantitys[0] }).map((_, i) => ({
      id: (i + 1).toString(),
      name: getRandomName(),
      category: 'Ilustración' as Categories,
      rrss: `${getRandomInstagram()}?param=${i + 1}`,
      avatar: 'placeholder-avatar.svg',
      bio: `Diseñadora gráfica con "amplia experiencia" en branding y diseño editorial. Apasionada por la tipografía y el diseño "limpio" y funcional.
      @testing ${i + 1} some other text`,
      email: `maria.gonzalez${i + 1}@ejemplo.com`,
      city: 'La Serena',
      country: 'Chile',
      collective: `Colectivo ${Math.ceil((i + 1) / 2)}`,
    })),
    ...Array.from({ length: quantitys[1] }).map((_, i) => ({
      id: (i + quantitys[0] + 1).toString(),
      name: getRandomName(),
      category: 'Narrativa Gráfica' as Categories,
      rrss: `${getRandomInstagram()}?param=${i + 1}`,
      avatar: 'placeholder-avatar.svg',
      bio: `Diseñadora gráfica con amplia experiencia en branding y diseño editorial. Apasionada por la tipografía y el diseño limpio y funcional. ${i + 1}`,
      email: `ana.rojas${i + 1}@ejemplo.com`,
      city: 'Coquimbo',
      country: 'Argentina',
      collective: '',
    })),
    ...Array.from({ length: quantitys[2] }).map((_, i) => ({
      id: (i + quantitys[0] + quantitys[1] + 1).toString(),
      name: getRandomName(),
      category: 'Manualidades' as Categories,
      rrss: `${getRandomInstagram()}?param=${i + 1}`,
      avatar: 'placeholder-avatar.svg',
      bio: `Diseñadora gráfica con amplia experiencia en branding y diseño editorial. Apasionada por la tipografía y el diseño limpio y funcional. ${i + 1}`,
      email: `lucas.parra${i + 1}@ejemplo.com`,
      city: 'Ovalle',
      country: 'España',
      collective: '',
    })),
  ].sort(() => Math.random() - 0.5)
}
