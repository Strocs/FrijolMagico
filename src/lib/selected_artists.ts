import { SelectedArtist } from '@/types/artists'
import { googleSpreadsheetController } from './googleSpreadsheetController'

export enum selectedArtistsTableHeaders {
  ID = 'id',
  NAME = 'name',
  WORK_AREA = 'work_area',
  RRSS = 'rrss',
}

// Initialize the Google Spreadsheet
export async function getApprovedArtistsData(): Promise<SelectedArtist[]> {
  const data = await googleSpreadsheetController<SelectedArtist>({
    sheetId: process.env.SELECTED_ARTISTS_SHEET_ID,
    apiKey: process.env.GOOGLE_API_KEY,
    headers: selectedArtistsTableHeaders,
  })

  if (!data) {
    return []
  }

  return data
}
// For development/testing when Google Sheets isn't available
export const getMockApprovedArtistsData = (): SelectedArtist[] => {
  return [
    {
      id: '1',
      name: 'María González',
      work_area: 'Ilustración',
      rrss: 'https://instagram.com/mariag_ilustra?param=1',
    },
    {
      id: '2',
      name: 'Carlos Muñoz',
      work_area: 'Ilustración',
      rrss: 'https://instagram.com/carlos_diseno',
    },
    {
      id: '3',
      name: 'Ana Rojas',
      work_area: 'Narrativa Gráfica',
      rrss: 'https://instagram.com/ana_acuarelas?param=1',
    },
    {
      id: '4',
      name: 'Diego Silva',
      work_area: 'Manualidades',
      rrss: 'https://instagram.com/diego_murales',
    },
    {
      id: '5',
      name: 'Valentina Muñoz',
      work_area: 'Manualidades',
      rrss: 'https://instagram.com/valen_ilustra',
    },
    {
      id: '6',
      name: 'Lucas Parra',
      work_area: 'Ilustración',
      rrss: 'https://instagram.com/lucas_ilustra',
    },
    {
      id: '7',
      name: 'Sofía Sánchez',
      work_area: 'Narrativa Gráfica',
      rrss: 'https://instagram.com/sofia_diseno',
    },
    {
      id: '9',
      name: 'María Pizarro',
      work_area: 'Ilustración',
      rrss: 'https://instagram.com/maria_ilustra',
    },
    {
      id: '10',
      name: 'Sebastián Muñoz',
      work_area: 'Ilustración',
      rrss: 'https://instagram.com/sebastian_diseno',
    },
    {
      id: '11',
      name: 'Lucas Valdivia',
      work_area: 'Manualidades',
      rrss: 'https://instagram.com/lucas_acuarelas',
    },
    {
      id: '12',
      name: 'Catalina Soto',
      work_area: 'Narrativa Gráfica',
      rrss: 'https://instagram.com/catalina_ilustra',
    },
    {
      id: '13',
      name: 'Felipe Fuentes',
      work_area: 'Ilustración',
      rrss: 'https://instagram.com/felipe_murales',
    },
    {
      id: '14',
      name: 'Sofía Reyes',
      work_area: 'Ilustración',
      rrss: 'https://instagram.com/sofia_ilustra',
    },
    {
      id: '15',
      name: 'María Jesús González',
      work_area: 'Narrativa Gráfica',
      rrss: 'https://instagram.com/mariajesus_diseno',
    },
    {
      id: '16',
      name: 'Carolina Rojas',
      work_area: 'Ilustración',
      rrss: 'https://instagram.com/maria.paz_ilustra',
    },
    {
      id: '19',
      name: 'Sofía Sánchez',
      work_area: 'Manualidades',
      rrss: 'https://instagram.com/sofia_diseno',
    },
    {
      id: '20',
      name: 'Cristóbal Soto',
      work_area: 'Ilustración',
      rrss: 'https://instagram.com/cristobal_acuarelas',
    },
    {
      id: '21',
      name: 'Lucas Parra',
      work_area: 'Narrativa Gráfica',
      rrss: 'https://instagram.com/lucas_ilustra',
    },
    {
      id: '22',
      name: 'María Alejandra Rojas',
      work_area: 'Ilustración',
      rrss: 'https://instagram.com/maria.alejandra_ilustra',
    },
  ]
}
