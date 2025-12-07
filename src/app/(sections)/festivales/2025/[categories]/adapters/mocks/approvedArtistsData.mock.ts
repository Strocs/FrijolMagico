import { Categories } from '@/types/artists'
import { ApprovedArtist } from '../../types'
import {
  getRandomName,
  getRandomInstagram,
} from '@/infra/__mocks__/mockDataUtils'

const quantitys: number[] = [40, 10, 10]

// For development/testing when Google Sheets isn't available
export const getDataFromMock = (): ApprovedArtist[] => {
  return [
    ...Array.from({ length: quantitys[0] }).map((_, i) => ({
      id: (i + 1).toString(),
      name: getRandomName(),
      category: 'Ilustración' as Categories,
      rrss: `${getRandomInstagram()}?param=${i + 1}`,
    })),
    ...Array.from({ length: quantitys[1] }).map((_, i) => ({
      id: (i + quantitys[0] + 1).toString(),
      name: getRandomName(),
      category: 'Narrativa Gráfica' as Categories,
      rrss: `${getRandomInstagram()}?param=${i + 1}`,
    })),
    ...Array.from({ length: quantitys[2] }).map((_, i) => ({
      id: (i + quantitys[0] + quantitys[1] + 1).toString(),
      name: getRandomName(),
      category: 'Manualidades' as Categories,
      rrss: `${getRandomInstagram()}?param=${i + 1}`,
    })),
  ].sort(() => Math.random() - 0.5)
}
