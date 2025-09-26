export interface AppSchedule {
  title: string
  description: string
  activityType: string
  startingTime: string
  duration: number // in minutes
  speaker: string | string[]
  speakerSocialLink: string | string[] | null
  infoLink: string | null
  inscriptionLink: string | null
}

export interface RawSchedule {
  Horario?: string
  'Tipo de actividad'?: string
  'Nombre de la actividad'?: string
  Descripción?: string
  Encargado?: string
  'Duración (min)'?: string
  RRSS?: string
  Información?: string
}

export type ScheduleHeaders = Record<
  keyof Omit<AppSchedule, 'inscriptionLink'>,
  keyof RawSchedule
>
