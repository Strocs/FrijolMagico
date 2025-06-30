import { Footer } from '@/components/Footer'

export default function SectionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div aria-hidden className='relative container mx-auto px-4'>
        {children}
        <Footer />
      </div>
    </>
  )
}
