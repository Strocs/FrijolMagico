type NormalizePath = (text: string) => string

export const normalizePath: NormalizePath = (text) => {
  return text
    .normalize('NFD')
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
}

