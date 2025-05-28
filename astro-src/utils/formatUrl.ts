export function formatUrl(url: string) {
  url = url.trim().toLowerCase()
  if (/^(http:\/\/|https:\/\/|www\.)/.test(url)) {
    if (url.startsWith('http://')) {
      url = 'https://' + url.substring(7)
    } else if (url.startsWith('www.')) {
      url = 'https://' + url
    }
  } else {
    url = 'https://' + url
  }
  if (/^https:\/\/[\w.-]+(\.[\w.-]+)+/.test(url)) {
    return url
  }
  return '#'
}
