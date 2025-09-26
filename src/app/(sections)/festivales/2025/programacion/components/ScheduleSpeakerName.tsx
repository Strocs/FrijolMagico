import { ExternalLink } from 'lucide-react'
import { AppSchedule } from '../types/schedule'

type ScheduleSpeakerNameProps = Pick<
  AppSchedule,
  'speaker' | 'speakerSocialLink'
>

export const ScheduleSpeakerName = ({
  speaker,
  speakerSocialLink,
}: ScheduleSpeakerNameProps) => {
  if (!speaker || speaker === '') return null

  const isSpeakerList = Array.isArray(speaker)
  const isSpeakerSocialLinkList = Array.isArray(speakerSocialLink)

  if (!isSpeakerList) {
    if (!speakerSocialLink) return <SpeakerName speaker={speaker} />
    const socialLink = isSpeakerSocialLinkList
      ? speakerSocialLink[0]
      : speakerSocialLink
    return <SpeakerLink speaker={speaker} speakerSocialLink={socialLink} />
  }

  return speaker.map((spk, index) => {
    const socialLink = isSpeakerSocialLinkList
      ? speakerSocialLink[index]
      : speakerSocialLink

    if (socialLink) {
      return (
        <SpeakerLink
          key={`${spk}-${index}`}
          speaker={spk}
          speakerSocialLink={socialLink}
        />
      )
    }

    return <SpeakerName key={`${spk}-${index}`} speaker={spk} />
  })
}

const SpeakerName = ({ speaker }: { speaker: string }): React.ReactNode => {
  return <p className='mt-1 flex items-center gap-1 font-light'>{speaker}</p>
}

const SpeakerLink = ({
  speaker,
  speakerSocialLink,
}: {
  speaker: string
  speakerSocialLink: string
}): React.ReactNode => {
  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={speakerSocialLink}
      className='mt-1 flex items-center gap-1 font-light hover:underline'>
      {speaker}
      <ExternalLink size={14} strokeWidth={1.2} />
    </a>
  )
}
