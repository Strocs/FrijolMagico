export interface CatalogArtist {
  id: string
  name: string
  city: string
  work_area: string
  bio: string
  email: string
  rrss: string
  avatar: string
}

export type Catalog = CatalogArtist[]

export interface SelectedFilters {
  [key: string]: string[]
}
