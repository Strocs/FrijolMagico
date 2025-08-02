// Mapping of filter keys to their display labels in Spanish
export const FILTER_LABELS = {
  country: 'País',
  city: 'Ciudad',
  category: 'Categoría',
  search: 'Busqueda',
} as const

export const FILTER_KEYS = {
  country: 'country',
  city: 'city',
  category: 'category',
  search: 'search',
} as const

// Exportar los headers para uso en el servicio
export const CATALOG_SHEET_HEADERS = {
  id: 'id',
  name: 'name',
  category: 'category',
  country: 'country',
  rrss: 'rrss',
  avatar: 'avatar',
  bio: 'bio',
  email: 'email',
  city: 'city',
  collective: 'collective',
} as const
