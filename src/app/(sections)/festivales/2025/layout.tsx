import localFont from 'next/font/local'
import { ParallaxBackground } from './components/ParallaxBackground'
import './styles/2025.css'

const superFortress = localFont({
  src: './fonts/SuperFortress.woff2',
  variable: '--font-superfortress',
  display: 'swap',
})

export default function Festival2025Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ParallaxBackground />
      <div className={superFortress.variable}>{children}</div>
    </>
  )
}
