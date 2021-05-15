import showGenerals from '@components/showGenerals.js'
import IllusPage from './components/templates/illusPage.js'
import ilusInfo from '@components/illustrators.js'
import Rrss from '@templates/rrss.js'
import IllusImg from '@templates/illusImg.js'
import showImg from '@components/showImg.js'
import '@styles/iluspage.css'

showGenerals('../')

const glitter = document.getElementsByClassName('glitter')[0]
const bluestray = document.getElementsByClassName('bluestray')[0]
const camellia = document.getElementsByClassName('camellia')[0]
const camipepe = document.getElementsByClassName('camipepe')[0]
const catana = document.getElementsByClassName('catana')[0]
const collarcitos = document.getElementsByClassName('collarcitos')[0]
const cris = document.getElementsByClassName('cris')[0]
const drommer = document.getElementsByClassName('drommer')[0]
const vincent = document.getElementsByClassName('vincent')[0]
const eline = document.getElementsByClassName('eline')[0]
const elmenese = document.getElementsByClassName('elmenese')[0]
const neehre = document.getElementsByClassName('neehre')[0]
const pan = document.getElementsByClassName('pan')[0]
const ojus = document.getElementsByClassName('ojus')[0]
const prr = document.getElementsByClassName('prr')[0]
const sofi = document.getElementsByClassName('sofi')[0]
const sun = document.getElementsByClassName('sun')[0]
const tigre = document.getElementsByClassName('tigre')[0]

if (glitter !== undefined) {
  glitter.innerHTML = IllusPage(ilusInfo[0], Rrss(ilusInfo[0]).ig, '', '', '', '', '', '', Rrss(ilusInfo[0]).mail, 1, 2, 3)
  glitter.insertAdjacentHTML('afterend', IllusImg(ilusInfo[0], 1, 2, 3))
} else if (bluestray !== undefined) {
  bluestray.innerHTML = IllusPage(ilusInfo[1], Rrss(ilusInfo[1]).ig, Rrss(ilusInfo[1]).fb, Rrss(ilusInfo[1]).twitter, '', '', '', '', Rrss(ilusInfo[1]).mail, 1, 2, 3)
  bluestray.insertAdjacentHTML('afterend', IllusImg(ilusInfo[1], 1, 2, 3))
} else if (camellia !== undefined) {
  camellia.innerHTML = IllusPage(ilusInfo[2], Rrss(ilusInfo[2]).ig, Rrss(ilusInfo[2]).fb, Rrss(ilusInfo[2]).twitter, '', '', '', '', Rrss(ilusInfo[2]).mail, 1, 2, 3)
  camellia.insertAdjacentHTML('afterend', IllusImg(ilusInfo[2], 1, 2, 3))
} else if (camipepe !== undefined) {
  camipepe.innerHTML = IllusPage(ilusInfo[3], Rrss(ilusInfo[3]).ig, '', '', '', '', Rrss(ilusInfo[3]).behance, Rrss(ilusInfo[3]).web, Rrss(ilusInfo[3]).mail)
  camipepe.insertAdjacentHTML('afterend', IllusImg(ilusInfo[3]))
} else if (catana !== undefined) {
  catana.innerHTML = IllusPage(ilusInfo[4], Rrss(ilusInfo[4]).ig, '', '', '', '', '', '', Rrss(ilusInfo[4]).mail)
  catana.insertAdjacentHTML('afterend', IllusImg(ilusInfo[4]))
} else if (collarcitos !== undefined) {
  collarcitos.innerHTML = IllusPage(ilusInfo[5], Rrss(ilusInfo[5]).ig, '', '', '', '', '', '', Rrss(ilusInfo[5]).mail, 1, 2, 3)
  collarcitos.insertAdjacentHTML('afterend', IllusImg(ilusInfo[5], 1, 2, 3))
} else if (cris !== undefined) {
  cris.innerHTML = IllusPage(ilusInfo[6], Rrss(ilusInfo[6]).ig, '', '', '', '', '', '', Rrss(ilusInfo[6]).mail)
  cris.insertAdjacentHTML('afterend', IllusImg(ilusInfo[6]))
} else if (drommer !== undefined) {
  drommer.innerHTML = IllusPage(ilusInfo[7], Rrss(ilusInfo[7]).ig, '', '', '', '', '', '', Rrss(ilusInfo[7]).mail, 1, 2, 3)
  drommer.insertAdjacentHTML('afterend', IllusImg(ilusInfo[7], 1, 2, 3))
} else if (vincent !== undefined) {
  vincent.innerHTML = IllusPage(ilusInfo[8], Rrss(ilusInfo[8]).ig, '', '', '', '', '', '', Rrss(ilusInfo[8]).mail, 1, 2, 3)
  vincent.insertAdjacentHTML('afterend', IllusImg(ilusInfo[8], 1, 2, 3))
} else if (eline !== undefined) {
  eline.innerHTML = IllusPage(ilusInfo[9], Rrss(ilusInfo[9]).ig, '', Rrss(ilusInfo[9]).twitter, '', Rrss(ilusInfo[9]).tiktok, '', '', Rrss(ilusInfo[9]).mail)
  eline.insertAdjacentHTML('afterend', IllusImg(ilusInfo[9]))
} else if (elmenese !== undefined) {
  elmenese.innerHTML = IllusPage(ilusInfo[10], Rrss(ilusInfo[10]).ig, '', '', '', '', '', '', Rrss(ilusInfo[10]).mail)
  elmenese.insertAdjacentHTML('afterend', IllusImg(ilusInfo[10]))
} else if (neehre !== undefined) {
  neehre.innerHTML = IllusPage(ilusInfo[11], Rrss(ilusInfo[11]).ig, '', '', '', '', '', '', Rrss(ilusInfo[11]).mail, 1, 2, 3)
  neehre.insertAdjacentHTML('afterend', IllusImg(ilusInfo[11], 1, 2, 3))
} else if (pan !== undefined) {
  pan.innerHTML = IllusPage(ilusInfo[12], Rrss(ilusInfo[12]).ig, '', '', '', '', '', '', Rrss(ilusInfo[12]).mail)
  pan.insertAdjacentHTML('afterend', IllusImg(ilusInfo[12]))
} else if (ojus !== undefined) {
  ojus.innerHTML = IllusPage(ilusInfo[13], Rrss(ilusInfo[13]).ig, '', '', '', '', '', '', Rrss(ilusInfo[13]).mail)
  ojus.insertAdjacentHTML('afterend', IllusImg(ilusInfo[13]))
} else if (prr !== undefined) {
  prr.innerHTML = IllusPage(ilusInfo[14], Rrss(ilusInfo[14]).ig, '', '', '', '', '', '', Rrss(ilusInfo[14]).mail)
  prr.insertAdjacentHTML('afterend', IllusImg(ilusInfo[14]))
} else if (sofi !== undefined) {
  sofi.innerHTML = IllusPage(ilusInfo[15], Rrss(ilusInfo[15]).ig, '', '', '', '', '', '', Rrss(ilusInfo[15]).mail)
  sofi.insertAdjacentHTML('afterend', IllusImg(ilusInfo[15]))
} else if (sun !== undefined) {
  sun.innerHTML = IllusPage(ilusInfo[16], Rrss(ilusInfo[16]).ig, '', '', Rrss(ilusInfo[16]).yt, Rrss(ilusInfo[16]).tiktok, Rrss(ilusInfo[16]).behance, Rrss(ilusInfo[16]).web, Rrss(ilusInfo[16]).mail)
  sun.insertAdjacentHTML('afterend', IllusImg(ilusInfo[16]))
} else if (tigre !== undefined) {
  tigre.innerHTML = IllusPage(ilusInfo[17], Rrss(ilusInfo[17]).ig, '', '', '', '', '', '', Rrss(ilusInfo[17]).mail)
  tigre.insertAdjacentHTML('afterend', IllusImg(ilusInfo[17]))
}

showImg()