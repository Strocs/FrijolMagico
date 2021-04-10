import Header from '@templates/Header-ilus.js'
import Footer from '@templates/Footer.js'
import DetailImg from '@templates/DetailImg.js'
import '@styles/elmenese.css'

(async function App() {
    const header = null || document.getElementsByClassName('header__container')[0];
    const footer = null || document.getElementsByClassName('footer__container')[0];
    header.innerHTML = await Header();
    footer.innerHTML = await Footer();
  })();

DetailImg()
