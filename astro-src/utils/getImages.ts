type GetImages = (
  glob: Record<string, () => Promise<unknown>>
) => Promise<ImageMetadata[]>

export const getImages: GetImages = async (glob) => {
  const listOfValues = Object.values(glob).map((image) => image())

  return Promise.all(listOfValues).then((photos) => {
    return photos.map((photo) => (photo as { default: ImageMetadata }).default)
  })
}
