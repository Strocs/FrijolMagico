import { Footer } from '@/components/Footer'

export interface SectionLayoutProps {
  children: React.ReactNode
}

export default function SectionLayout({ children }: SectionLayoutProps) {
  return (
    <>
      <div className='container mx-auto px-4'>{children}</div>
      <Footer />
    </>
  )
}
