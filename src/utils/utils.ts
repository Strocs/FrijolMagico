import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// cn function for tailwind merge
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Normalize string for search functionality
export const normalizeString = (str: string): string => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replaceAll(' ', '')
}

// Format URL to ensure it has https://
export const formatUrl = (url: string): string => {
  if (!url) return ''
  return url.startsWith('http') ? url : `https://${url}`
}

// Format URL without query parameters
export const formatUrlWithoutQuery = (url: string): string => {
  if (!url) return ''
  const formattedUrl = formatUrl(url)
  const urlWithoutQuery = formattedUrl.split('?')[0]
  return urlWithoutQuery.endsWith('/')
    ? urlWithoutQuery.slice(0, -1)
    : urlWithoutQuery
}

// Extract Instagram username from URL
export const getInstagramUserTag = (url: string): string => {
  if (!url) return ''
  const formattedUrl = formatUrl(url)
  const match = formattedUrl.match(
    /(?:https?:\/\/)?(?:www\.)?instagram\.com\/([^/]+)/i,
  )
  const userTag = match?.[1].split('?')[0]
  return match ? `@${userTag}` : formattedUrl
}
