export function getInstagramUserTag(instagramURL: string): string {
  const userName = '@' + instagramURL.toLowerCase().split('.com/')[1]
  return userName.includes('?') ? userName.split('?')[0] : userName
}
