import siteData from '@/data/site.json'

export type WorkArea = (typeof siteData.selected_artists.categories)[number]

export interface BaseArtist {
  id: string
  name: string
  work_area: WorkArea
  rrss: string
}

export interface RawCatalogArtist extends BaseArtist {
  city: string
  bio: string
  email: string
  avatar: string
  collective: string
}

export interface Collective {
  name: string
  members: {
    id: string
    name: string
  }[]
}

export interface CatalogArtist extends RawCatalogArtist {
  collective: Collective | null
}

export type ApprovedArtist = BaseArtist

export interface SelectedFilters {
  [key: string]: string[]
}
