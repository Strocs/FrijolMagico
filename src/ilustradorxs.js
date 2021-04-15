import Header from '@templates/Header.js'
import Footer from '@templates/Footer.js'
import '@styles/ilustradorxs.css'

(async function App() {
    const header = null || document.getElementsByClassName('header__container')[0];
    const footer = null || document.getElementsByClassName('footer__container')[0];
    header.innerHTML = await Header();
    footer.innerHTML = await Footer();
  })();