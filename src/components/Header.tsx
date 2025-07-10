import ReactMarkdown from 'react-markdown'
import { DoodleLine } from './DoodleLine'
import { cn } from '@/lib/utils'

interface StylesClassProps {
  titleClass?: string
  subTitleClass?: string
  descriptionClass?: string
}

interface HeaderProps {
  title: string
  subTitle?: string
  description?: string
  fontFamily?: StylesClassProps
  textColor?: StylesClassProps
}

export const Header = ({
  title,
  subTitle,
  description,
  fontFamily = {
    titleClass: 'font-josefin',
    subTitleClass: 'font-josefin',
    descriptionClass: 'font-noto',
  },
  textColor = {
    titleClass:
      'from-fm-orange to-fm-yellow bg-gradient-to-r bg-clip-text text-transparent',
    subTitleClass: 'text-fm-orange',
    descriptionClass: 'text-fm-green',
  },
}: HeaderProps) => {
  return (
    <header className={cn('space-y-4 px-2 pt-16')}>
      <div className='flex flex-col gap-2'>
        <ReactMarkdown
          components={{
            h1: ({ ...props }) => (
              <h1
                className={cn(
                  'py-2 text-center text-5xl sm:text-6xl',
                  textColor.titleClass,
                  fontFamily.titleClass,
                )}
                {...props}
              />
            ),
          }}>
          {title}
        </ReactMarkdown>
        {!!subTitle && (
          <ReactMarkdown
            components={{
              h2: ({ ...props }) => (
                <h2
                  className={cn(
                    'text-fm-orange -mt-6 py-2 text-center text-4xl',
                    textColor.subTitleClass,
                    fontFamily.subTitleClass,
                  )}
                  {...props}
                />
              ),
            }}>
            {subTitle}
          </ReactMarkdown>
        )}
      </div>
      {!!description && (
        <ReactMarkdown
          components={{
            p: ({ ...props }) => (
              <p
                className={cn(
                  'mx-auto max-w-prose text-center font-normal',
                  textColor.descriptionClass,
                  fontFamily.descriptionClass,
                )}
                {...props}
              />
            ),
          }}>
          {description}
        </ReactMarkdown>
      )}
      <DoodleLine />
    </header>
  )
}
