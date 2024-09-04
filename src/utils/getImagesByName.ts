import { getImages } from "./getImages"

const glob = import.meta.glob('../assets/images/*/*.png')
const images = await getImages(glob)

const originalPath = Object.keys(glob)

type GetImagesByName = (name: string) => ImageMetadata[]

export const getImagesByName: GetImagesByName = (name) => {
  return images.filter((image, i) => {
    if (originalPath[i].includes(name)) return image
  })
}