export interface AppSchedule {
  title: string
  description: string
  activityType: string
  startingTime: string // ISO 8601 format
  duration: number // in minutes
  speaker: string
  speakerSocialLink?: string
  infoLink?: string
}

export interface RawSchedule {
  Horario: string
  'Tipo de actividad': string
  'Nombre de la actividad': string
  Descripción: string
  Encargado: string
  'Duración (min)': string
  RRSS: string
  Información?: string
}

export type ScheduleHeaders = Record<keyof AppSchedule, keyof RawSchedule>
