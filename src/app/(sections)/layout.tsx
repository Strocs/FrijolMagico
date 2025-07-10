import { Footer } from '@/components/Footer'

export default function SectionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className='text-2025-white container mx-auto px-4'>
        {children}
        <Footer />
      </div>
    </>
  )
}
