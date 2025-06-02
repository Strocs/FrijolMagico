import { Header } from '@/components/Header'
import siteData from '@/i18n/site.json'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

const { apply } = siteData

export const metadata = {
  title: apply.seo.title,
  description: apply.seo.description,
}

export default function ConvocatoriaPage() {
  return (
    <>
      <Header
        title={apply.title}
        subTitle={apply.subtitle}
        description={apply.description}
      />

      <main className='mx-auto w-full max-w-5xl p-8'>
        <section className='relative flex h-[25rem] flex-col rounded-2xl sm:flex-row'>
          <Link
            href={apply.steps[0].link}
            className='bg-fm-orange relative z-10 flex-1 origin-right overflow-hidden rounded-t-2xl p-4 transition-all duration-300 ease-out hover:flex-[1.2] hover:scale-110 hover:rounded-r-2xl sm:rounded-l-2xl sm:rounded-tr-none sm:p-8'>
            <Image
              src='/enredadera.png'
              alt='Frijol Mágico'
              width={600}
              height={600}
              className='mirror-x lg:mirror-none absolute -bottom-10 left-0 -z-10'
            />

            <div className='max-w-sm'>
              <ReactMarkdown
                components={{
                  h3: ({ ...props }) => (
                    <h3
                      className='text-fm-white font-noto text-4xl font-bold sm:text-5xl lg:text-6xl'
                      {...props}
                    />
                  ),
                }}>
                {apply.steps[0].title}
              </ReactMarkdown>
              <p className='text-fm-white font-noto'>
                {apply.steps[0].description}
              </p>
            </div>
          </Link>

          <Link
            href={apply.steps[1].link}
            className='bg-fm-yellow relative z-10 flex flex-1 origin-left flex-col justify-end overflow-hidden rounded-b-2xl p-4 transition-all duration-300 ease-out hover:flex-[1.2] hover:scale-110 hover:rounded-l-2xl sm:rounded-r-2xl sm:rounded-bl-none sm:p-8'>
            <Image
              src='/enredadera-esquina.png'
              alt='Frijol Mágico'
              width={400}
              height={400}
              className='absolute -top-8 -right-20 -z-10 sm:top-0'
            />

            <div className='max-w-sm'>
              <ReactMarkdown
                components={{
                  h3: ({ ...props }) => (
                    <h3
                      className='text-fm-black font-noto text-4xl font-bold sm:text-5xl lg:text-6xl'
                      {...props}
                    />
                  ),
                }}>
                {apply.steps[1].title}
              </ReactMarkdown>
              <p className='text-fm-black font-noto'>
                {apply.steps[1].description}
              </p>
            </div>
          </Link>
        </section>
      </main>
    </>
  )
}
