import { Footer } from '@/components/Footer'

export default function SectionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className='container mx-auto px-4'>
        {children}
        <Footer />
      </div>
    </>
  )
}
