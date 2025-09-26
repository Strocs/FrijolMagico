import { AppSchedule, RawSchedule, ScheduleHeaders } from '../types/schedule'
import {
  FESTIVAL_SCHEDULE_SHEET_HEADERS,
  WORKSHOP_INSCRIPTION_LINK,
} from '../constants/festivalScheduleConstants'

export const mapToAppSchedule = (
  rawList: RawSchedule[],
  headers: ScheduleHeaders = FESTIVAL_SCHEDULE_SHEET_HEADERS,
): AppSchedule[] => {
  const appSchedule = rawList.map((item) => {
    return {
      startingTime: String(item[headers.startingTime] ?? ''),
      duration: Number(item[headers.duration] ?? 0),
      activityType: String(item[headers.activityType] ?? ''),
      title: String(item[headers.title] ?? ''),
      description: String(item[headers.description] ?? ''),
      speaker: parseSpeaker(String(item[headers.speaker])),
      speakerSocialLink: parseSpeakerSocialLink(
        String(item[headers.speakerSocialLink]),
      ),
      infoLink: !!item[headers.infoLink]
        ? String(item[headers.infoLink])
        : null,
      inscriptionLink: WORKSHOP_INSCRIPTION_LINK,
    }
  })

  return filterUnrelatedActivities(appSchedule)
}

const parseSpeaker = (
  speaker: RawSchedule['Encargado'],
): AppSchedule['speaker'] => {
  if (!speaker || speaker.trim() === '') return ''

  const speakersList = speaker.split(',').map((s) => s.trim())

  if (speakersList.length > 1) {
    return speakersList
  }

  if (speakersList.length === 1) {
    return speakersList[0]
  }

  return ''
}

const parseSpeakerSocialLink = (
  speakerSocialLink: RawSchedule['RRSS'],
): AppSchedule['speakerSocialLink'] => {
  if (!speakerSocialLink || speakerSocialLink.trim() === '') return null

  const speakerSocialLinkList = speakerSocialLink
    .split(',')
    .map((s) => s.trim())

  if (speakerSocialLinkList.length > 1) {
    return speakerSocialLinkList
  }

  if (speakerSocialLinkList.length === 1) {
    return speakerSocialLinkList[0]
  }

  return null
}

const filterUnrelatedActivities = (schedule: AppSchedule[]): AppSchedule[] => {
  return schedule.filter(
    (item) =>
      item.activityType.toLowerCase().trim() !== 'cierre' &&
      item.activityType.toLowerCase().trim() !== 'ventana',
  )
}
