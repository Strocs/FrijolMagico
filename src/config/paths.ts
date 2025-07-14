/**
 * Centralized path configuration for the application
 * This file serves as a single source of truth for all routes
 */

export const paths = {
  home: '/',
  catalog: '/catalogo',
  apply: '/convocatoria',
  festival: {
    base: '/festivales',
    2025: {
      base: '/festivales/2025',
      apply: '/festivales/2025/aplicar',
      ilustracion: '/festivales/2025/ilustracion',
      manualidades: '/festivales/2025/manualidades',
      narrativagrafica: '/festivales/2025/narrativagrafica',
    },
  },
} as const

// Helper types for type safety
type ValueOf<T> = T[keyof T]
export type AppPath = ValueOf<typeof paths> | ValueOf<typeof paths.festival>
