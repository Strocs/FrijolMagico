// Centralización de los nombres de filtros para el catálogo
// Normalizados (en inglés) <-> Dominio (en español)

export const FILTER_KEYS = {
  city: 'ciudad',
  category: 'categoria',
  search: 'busqueda',
} as const;

export type FilterKey = keyof typeof FILTER_KEYS;

// Si necesitas el inverso:
export const FILTER_KEYS_INVERSE = Object.fromEntries(
  Object.entries(FILTER_KEYS).map(([k, v]) => [v, k])
) as Record<string, FilterKey>;
