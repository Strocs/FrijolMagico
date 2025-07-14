import { redirect } from 'next/navigation'
import { paths } from '@/config/paths'

export default function FestivalesPage() {
  redirect(paths.festival[2025].base)
}
