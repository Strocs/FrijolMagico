const IllusSlider = (ilus) => {

  const view = 
    `
      <li class="ilus__slide glide__slide">
        <a class="ilus__slide-link" href="ilustradorxs/${ilus.url}">
          <h1 class="ilus__slide-name">${ilus.name}</h1>
        </a>
        <img class="ilus__slide-img" src="assets/gallery/${ilus.images[0]}.png" alt="${ilus.name}">
      </li>
    `;
    return view;
  };
  
export default IllusSlider;

