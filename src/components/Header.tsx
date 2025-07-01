import ReactMarkdown from 'react-markdown'
import { DoodleLine } from './DoodleLine'
import { LogoHomeLink } from './LogoHomeLink'

export const Header = ({
  title,
  subTitle,
  description,
}: {
  title: string
  subTitle?: string
  description?: string
}) => {
  return (
    <header className='text-fm-green space-y-4 px-2 pt-4'>
      <LogoHomeLink />
      <div className='flex flex-col gap-2'>
        <ReactMarkdown
          components={{
            h1: ({ ...props }) => (
              <h1
                className='font-josefin from-fm-orange to-fm-yellow bg-gradient-to-r bg-clip-text py-2 text-center text-5xl text-transparent sm:text-6xl'
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
                  className='font-josefin text-fm-orange -mt-6 py-2 text-center text-4xl'
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
                className='mx-auto max-w-prose text-center font-normal'
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
