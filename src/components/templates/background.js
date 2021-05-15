const Background = (ramaPath) => {

  const view = 
    `
    <div class="bg__root">
      <img class="bg__left" src="${ramaPath}assets/gallery/ramaLeft.png" alt="">
      <img class="bg__right" src="${ramaPath}assets/gallery/ramaRight.png" alt="">
    </div>
    `;
    return view;
  };
  
export default Background;