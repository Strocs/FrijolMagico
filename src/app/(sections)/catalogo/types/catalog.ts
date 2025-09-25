import { BaseArtist } from '@/types/artists'

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

export type CatalogArtist = RawCatalogArtist & {
  collective: Collective | null
}
