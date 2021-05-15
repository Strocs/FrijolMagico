const Rrss = (ilus) => {
  const view = {
    ig: `<a target="_blank" class="data__box" href="https://www.instagram.com/${ilus.contact.ig}"><img class="data__logo" src="../assets/gallery/instagram.svg" alt="" /></a>`,
    fb: `<a target="_blank" class="data__box data__fb" href="https://www.facebook.com/${ilus.contact.fb}"><img class="data__logo" src="../assets/gallery/facebook.svg" alt="" /></a>`,
    twitter: `<a target="_blank" class="data__box data__tw" href="https://twitter.com/${ilus.contact.twitter}"><img class="data__logo" src="../assets/gallery/twitter.svg" alt="" /></a>`,
    yt: `<a target="_blank" class="data__box" href="https://www.youtube.com/${ilus.contact.twitter}"><img class="data__logo" src="../assets/gallery/youtube.svg" alt="" /></a>`,
    tiktok: `<a target="_blank" class="data__box" href="https://vm.tiktok.com/${ilus.contact.tiktok}"><img class="data__logo" src="../assets/gallery/tiktok.svg" alt="" /></a>`,
    behance: `<a target="_blank" class="data__box" href="https://www.behance.net/${ilus.contact.behance}"><img class="data__logo" src="../assets/gallery/behance.svg" alt="" /></a>`,
    web: `<a target="_blank" class="data__box" href="${ilus.contact.web}"><img class="data__logo" src="../assets/gallery/web.svg" alt="" /></a>`,
    mail: `<a target="_blank" class="data__box" href="mailto:${ilus.contact.mail}"> <img class="data__logo" src="../assets/gallery/gmail.svg" alt="" /></a>`,
  }

  return view
}

export default Rrss;