import illustratorList from './IllustratorList.js'

const Gallery = (ilus) => {


  const view = 
  `
  <article class="ilus__card">
    <a class="ilus__link" href="ilustradorxs/${ilus.url}">
      <div class="ilus__img-container">
        <img class="ilus__img" src="./${ilus.images[0]}.png" alt="${ilus.name}"/>
      </div>
      <h1 class="ilus__name">${ilus.name}</h1>
    </a>
  </article>
  `;

return view;
};

const wrap = document.getElementsByClassName('ilus__card-container')[0]
wrap.innerHTML = illustratorList(Gallery)






