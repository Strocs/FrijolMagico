import { getImages } from "./getImages"

const glob = import.meta.glob('../assets/images/*/*.png')
const images = await getImages(glob)

type GetImagesOf = (name: string) => ImageMetadata[]

export const getImagesOf: GetImagesOf = (name) => {
  return images.filter(({ src }) => src.includes(name))
}