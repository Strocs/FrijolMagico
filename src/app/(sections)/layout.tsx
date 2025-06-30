import { Footer } from '@/components/Footer'

export default function SectionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* TODO: render children outside div to more accurate html composition */}
      <div className='container mx-auto px-4'>
        {children}
        <Footer />
      </div>
    </>
  )
}
