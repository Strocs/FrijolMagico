const IllusImg = (ilus, img1 = 0, img2 = 1, img3 = 2) => {

  const view = 
    ` 
      <div class="images__container">
        <div class="images__detail">
          <img class="images__img" src="../assets/gallery/${ilus.images[img1]}.png" alt="${ilus.name}" />
          <img class="images__img" src="../assets/gallery/${ilus.images[img2]}.png" alt="${ilus.name}" />
          <img class="images__img" src="../assets/gallery/${ilus.images[img3]}.png" alt="${ilus.name}" />
        </div>
      </div>
    `
  return view
}

export default IllusImg

