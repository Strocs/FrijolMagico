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

export interface SelectedFilters {
  [key: string]: string[]
}

export type SelectedArtist = Pick<
  CatalogArtist,
  'id' | 'name' | 'work_area' | 'rrss'
>
