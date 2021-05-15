const IllusPage = (ilus, ig, fb, twitter, yt, tiktok, behance, web, mail, img1 = 0, img2 = 1, img3 = 2) => {


  const view = 
  `
    <main class="ilus__main">
      <header class="ilus-page-header">
        <h1 class="ilus-page__title">${ilus.name}</h1>
        <p class="ilus-page__location">${ilus.location}</p>
        <p class="ilus-page__bio">
          ${ilus.bio}
        </p>
        <section class="ilus-page__data">
          ${ig}
          ${fb}
          ${twitter}
          ${yt}
          ${tiktok}
          ${behance}
          ${web}
          ${mail}
        </section>
      </header>
      <secion class="ilus-page__gallery">
        <img class="ilus-page__images" src="../assets/gallery/${ilus.images[img1]}.png" alt="${ilus.name}" />
        <img class="ilus-page__images" src="../assets/gallery/${ilus.images[img2]}.png" alt="${ilus.name}" />
        <img class="ilus-page__images" src="../assets/gallery/${ilus.images[img3]}.png" alt="${ilus.name}" />
      </secion>

      <a href="../ilustradorxs" class="gallery">Volver a la Galería</a>
    </main>
  `
  return view
}


export default IllusPage;