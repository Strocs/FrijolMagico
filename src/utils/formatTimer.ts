export const formatTimer = (timeToLive: number) => {

  let days = Math.floor(timeToLive / (1000 * 60 * 60 * 24))
  let hours = Math.floor((timeToLive % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let minutes = Math.floor((timeToLive % (1000 * 60 * 60)) / (1000 * 60))
  let seconds = Math.floor((timeToLive % (1000 * 60)) / 1000)

  return { days, hours, minutes, seconds }
}