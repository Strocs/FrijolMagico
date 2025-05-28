type NormalizeString = (text: string) => string

export const normalizeString: NormalizeString = (text) => {
  return text
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[^\w-]+/g, '')
}
