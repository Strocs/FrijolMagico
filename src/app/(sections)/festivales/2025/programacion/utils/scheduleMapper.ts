import { AppSchedule, RawSchedule, ScheduleHeaders } from '../types/schedule'
import { FESTIVAL_SCHEDULE_SHEET_HEADERS } from '../constants/festivalScheduleConstants'

export const mapToAppSchedule = (
  rawItem: RawSchedule,
  headers: ScheduleHeaders = FESTIVAL_SCHEDULE_SHEET_HEADERS,
): AppSchedule => {
  return {
    startingTime: String(rawItem[headers.startingTime] ?? ''),
    duration: Number(rawItem[headers.duration] ?? 0),
    activityType: String(rawItem[headers.activityType] ?? ''),
    title: String(rawItem[headers.title] ?? ''),
    description: String(rawItem[headers.description] ?? ''),
    speaker: String(rawItem[headers.speaker] ?? ''),
    speakerSocialLink: String(rawItem[headers.speakerSocialLink]) ?? null,
    infoLink: String(rawItem[headers.infoLink]) ?? null,
  }
}
