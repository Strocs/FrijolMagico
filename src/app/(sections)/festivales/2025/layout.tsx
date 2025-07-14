import { MinimalFooter } from '@/components/MinimalFooter'
import { ParallaxBackground } from './components/ParallaxBackground'

export default function Festival2025Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ParallaxBackground />
      <div data-palette='2025'>
        {children}
        <MinimalFooter />
      </div>
    </>
  )
}
