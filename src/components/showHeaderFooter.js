import Header from '@templates/header.js'
import Footer from '@templates/footer.js'
import showNav from '@components/showNav.js'

const showHeaderFooter = (headerPath) => {
  const header = null || document.getElementsByClassName('header__container')[0];
  const footer = null || document.getElementsByClassName('footer__container')[0];
  header.innerHTML = Header(headerPath);
  footer.innerHTML = Footer();
  showNav();
}

export default showHeaderFooter