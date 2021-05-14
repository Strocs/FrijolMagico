const showNav = () => {
  const navBtn = document.getElementsByClassName('nav__toggle')[0];
  const navShow = document.getElementsByClassName('nav__container')[0];

  navBtn.onclick = () => {
    let margin = navShow.style.marginTop;
    margin == '-100vh' ? navShow.style.marginTop = '0vh' : navShow.style.marginTop = '-100vh';
  }
};

export default showNav;
