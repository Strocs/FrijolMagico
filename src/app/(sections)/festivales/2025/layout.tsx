// import { MinimalFooter } from '@/components/MinimalFooter'
// import { Footer } from '@/components/Footer'
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
        {/* <MinimalFooter /> */}
        {/* <Footer doodleColor='text-2025-white' /> */}
      </div>
    </>
  )
}
