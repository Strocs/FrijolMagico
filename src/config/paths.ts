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
    2025: '/festivales/2025',
  },
} as const

// Helper types for type safety
type ValueOf<T> = T[keyof T]
export type AppPath = ValueOf<typeof paths> | ValueOf<typeof paths.festival>
