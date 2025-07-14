import siteData from '@/data/site.json'

export type WorkArea = (typeof siteData.selected_artists.categories)[number]

export interface BaseArtist {
  id: string
  name: string
  work_area: WorkArea
  rrss: string
}

export interface CatalogArtist extends BaseArtist {
  city: string
  bio: string
  email: string
  avatar: string
}

export type ApprovedArtist = BaseArtist

export interface SelectedFilters {
  [key: string]: string[]
}
