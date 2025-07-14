import { redirect } from 'next/navigation'
import { paths } from '@/config/paths'

export default function Festival2025Page() {
  redirect(paths.festival[2025].base + '/ilustracion')
}
