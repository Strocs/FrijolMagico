import { ParallaxBackground } from './components/ParallaxBackground'

export default function Festival2025Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ParallaxBackground />
      {children}
    </>
  )
}
