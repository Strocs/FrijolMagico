import { ApprovedArtistsCategoriesNav } from '@/components/approved-artists/ApprovedArtistsCategoriesNav'

export default function ApprovedArtistsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <section>
        {/* SIDE PANEL WITH CATEGORIES */}
        <aside>
          <ApprovedArtistsCategoriesNav />
        </aside>

        {/* PRESENTATION */}
        <section>{children}</section>
      </section>
    </>
  )
}
