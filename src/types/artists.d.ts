import siteData from '@/data/site.json'

export type Categories = (typeof siteData.selected_artists.categories)[number]

export interface BaseArtist {
  id: string
  name: string
  category: Categories
  rrss: string
}
