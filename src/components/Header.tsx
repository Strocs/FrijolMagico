import ReactMarkdown from 'react-markdown'
import { DoodleLine } from './DoodleLine'
import { cn } from '@/lib/utils'

export const Header = ({
  title,
  subTitle,
  description,
  doodleColor = 'text-fm-green',
  fontFamily,
  textColor,
  fontSize,
}: HeaderProps) => {
  const finalFontFamily = {
    ...defaultFontFamily,
    ...fontFamily,
  }

  const finalTextColor = {
    ...defaultTextColor,
    ...textColor,
  }

  const finalFontSize = {
    ...defaultFontSize,
    ...fontSize,
  }

  return (
    <header className={cn('space-y-4 px-2 pt-16', doodleColor)}>
      <div className='flex flex-col gap-2'>
        <ReactMarkdown
          components={{
            h1: ({ ...props }) => (
              // eslint-disable-next-line jsx-a11y/heading-has-content
              <h1
                className={cn(
                  'py-2 text-center',
                  finalTextColor.titleClass,
                  finalFontFamily.titleClass,
                  finalFontSize.titleClass,
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
                // eslint-disable-next-line jsx-a11y/heading-has-content
                <h2
                  className={cn(
                    '-mt-6 py-2 text-center',
                    finalTextColor.subTitleClass,
                    finalFontFamily.subTitleClass,
                    finalFontSize.subTitleClass,
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
                  finalTextColor.descriptionClass,
                  finalFontFamily.descriptionClass,
                  finalFontSize.descriptionClass,
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

interface StylesClassProps {
  titleClass?: string
  subTitleClass?: string
  descriptionClass?: string
}

interface HeaderProps {
  title: string
  subTitle?: string
  description?: string
  doodleColor?: string
  fontFamily?: StylesClassProps
  textColor?: StylesClassProps
  fontSize?: StylesClassProps
}

const defaultFontFamily: StylesClassProps = {
  titleClass: 'font-josefin',
  subTitleClass: 'font-josefin',
  descriptionClass: 'font-noto',
}

const defaultTextColor: StylesClassProps = {
  titleClass:
    'from-flexible-orange to-flexible-yellow bg-gradient-to-r bg-clip-text text-transparent',
  subTitleClass: 'text-flexible-orange',
  descriptionClass: 'text-flexible-green',
}

const defaultFontSize: StylesClassProps = {
  titleClass: 'text-5xl sm:text-6xl',
  subTitleClass: 'text-4xl',
  descriptionClass: 'text-base',
}
