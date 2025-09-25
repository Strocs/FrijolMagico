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

export const WORKSHOP_INSCRIPTION_LINK =
  'https://docs.google.com/forms/d/e/1FAIpQLSezrrJB5IyLY9ly85j573XdW_vHmt90zFEgvImDr3o4QpLe0A/viewform'
