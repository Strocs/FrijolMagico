import { Header } from '@/components/Header'
interface FestivalHeaderProps {
  title: string
  subTitle?: string
  description?: string
}

export const FestivalHeader = ({
  title,
  subTitle,
  description,
}: FestivalHeaderProps) => {
  return (
    <Header
      title={title}
      subTitle={subTitle}
      description={description}
      fontFamily={{
        titleClass: 'font-superfortress',
        subTitleClass: 'font-superfortress',
      }}
      textColor={{
        titleClass: 'text-2025-white',
        subTitleClass: 'text-2025-yellow',
        descriptionClass: 'text-2025-white/90',
      }}
      fontSize={{
        titleClass: 'text-4xl sm:text-6xl',
        subTitleClass: 'text-3xl',
      }}
      doodleColor='text-2025-orange'
    />
  )
}
