import { ScheduleHeaders } from '../types/schedule'

export const FESTIVAL_SCHEDULE_SHEET_HEADERS: ScheduleHeaders = {
  startingTime: 'Horario',
  duration: 'Duración (min)',
  activityType: 'Tipo de actividad',
  title: 'Nombre de la actividad',
  description: 'Descripción',
  speaker: 'Encargado',
  speakerSocialLink: 'RRSS',
  infoLink: 'Información',
} as const
