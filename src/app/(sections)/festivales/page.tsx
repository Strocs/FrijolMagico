import { redirect } from 'next/navigation'
import { paths } from '@/config/paths'

export default function SelectedArtistsPage() {
  redirect(paths.festival[2025])
}
