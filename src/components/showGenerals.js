import Header from '@templates/header.js'
import Footer from '@templates/footer.js'
import showNav from '@components/showNav.js'
import Background from '@templates/background.js'
import headerBg from '@components/headerBg.js'

const showGenerals = (headerPath) => {
  const header = null || document.getElementsByClassName('header__container')[0];
  const footer = null || document.getElementsByClassName('footer__container')[0];
  header.innerHTML = Header(headerPath);
  footer.innerHTML = Footer();
  document.body.insertAdjacentHTML('afterbegin', Background(headerPath));
  showNav();
  headerBg();
}

export default showGenerals