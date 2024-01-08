export type Contact = {
  instagram?: string
  email?: string
  facebook?: string
  x?: string
  youtube?: string
  behance?: string
  web?: string
  tiktok?: string
}


export type Artist = {
  artist: string
  id: string
  contact: Contact
  location: string
  bio: string
  realName?: string
}

export type Artists = Artist[]