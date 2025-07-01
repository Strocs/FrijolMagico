import { DoodleLine } from './DoodleLine'
import { LogoHomeLink } from './LogoHomeLink'

export interface PagesLayoutProps {
  children: React.ReactNode
  title: string
  description?: string
}

export const PagesLayout = ({
  children,
  title,
  description,
}: PagesLayoutProps) => {
  return (
    <div className='container mx-auto px-4'>
      <header className='textfm-white space-y-8 px-2 pt-[--top-bar-height] md:pt-[calc(var(--top-bar-height)+2rem)]'>
        <LogoHomeLink />
        <h1 className='from-fm-orange to-fm-yellow bg-gradient-to-r bg-clip-text py-2 text-center text-6xl font-black text-transparent'>
          {title}
        </h1>
        {!!description && (
          <p className='mx-auto max-w-prose text-center font-normal'>
            {description}
          </p>
        )}
      </header>
      <DoodleLine />
      <main>{children}</main>
    </div>
  )
}
