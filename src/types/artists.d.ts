import siteData from '@/data/site.json'

export type Categories = (typeof siteData.selected_artists.categories)[number]

export interface BaseArtist {
  id: string
  name: string
  category: Categories
  rrss: string
}

export interface RawCatalogArtist extends BaseArtist {
  city: string
  country: string
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
