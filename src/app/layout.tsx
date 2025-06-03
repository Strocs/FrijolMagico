import type { Metadata } from 'next'
import { Josefin_Sans, Noto_Sans } from 'next/font/google'
import siteData from '@/data/site.json'
import '@/styles/globals.css'
import { TopBarInfo } from '@/components/TopBarInfo'
import { Background } from '@/components/Background'

const SITE = siteData

const josefinSans = Josefin_Sans({
  variable: '--font-josefin-sans',
  subsets: ['latin'],
})

const notoSans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    images: [
      {
        url: SITE.image,
      },
    ],
  },
  twitter: {
    title: SITE.title,
    description: SITE.description,
    card: 'summary_large_image',
    images: [
      {
        url: SITE.image,
      },
    ],
  },
  icons: {
    icon: SITE.favicon,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={SITE.lang}>
      <body
        className={`${josefinSans.variable} ${notoSans.variable} bg-fm-white font-noto relative flex size-full min-h-[100dvh] flex-col antialiased`}>
        <Background />
        {SITE.top_bar.active && <TopBarInfo />}
        {children}
      </body>
    </html>
  )
}
