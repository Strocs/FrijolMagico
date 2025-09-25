import { AppSchedule, RawSchedule, ScheduleHeaders } from '../types/schedule'
import {
  FESTIVAL_SCHEDULE_SHEET_HEADERS,
  WORKSHOP_INSCRIPTION_LINK,
} from '../constants/festivalScheduleConstants'

export const mapToAppSchedule = (
  rawList: RawSchedule[],
  headers: ScheduleHeaders = FESTIVAL_SCHEDULE_SHEET_HEADERS,
): AppSchedule[] => {
  return rawList
    .map((item) => {
      return {
        startingTime: String(item[headers.startingTime] ?? ''),
        duration: Number(item[headers.duration] ?? 0),
        activityType: String(item[headers.activityType] ?? ''),
        title: String(item[headers.title] ?? ''),
        description: String(item[headers.description] ?? ''),
        speaker: String(item[headers.speaker] ?? ''),
        speakerSocialLink: item[headers.speakerSocialLink]
          ? String(item[headers.speakerSocialLink])
          : null,
        infoLink: !!item[headers.infoLink]
          ? String(item[headers.infoLink])
          : null,
        inscriptionLink:
          // This is business rule
          item[headers.activityType]?.toLowerCase().trim() === 'taller'
            ? WORKSHOP_INSCRIPTION_LINK
            : null,
      }
    })
    .filter(
      (item) =>
        // this is business rules
        item.activityType.toLowerCase().trim() !== 'cierre' &&
        item.activityType.toLowerCase().trim() !== 'ventana',
    )
}
