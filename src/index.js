import Header from '@templates/Header.js'
import Footer from '@templates/Footer.js'
import '@styles/home.css'

(async function App() {
    const header = null || document.getElementsByClassName('header__container')[0];
    const footer = null || document.getElementsByClassName('footer__container')[0];
    header.innerHTML = await Header();
    footer.innerHTML = await Footer();
  })();

  
jQuery.fn.FCInstagram.accessData = {
    accessToken: process.env.API, // Token
};
$('#instafeed').FCInstagram({
    max: 1, // A number between 1 and 25 of photos to show. Default: 9
    autoplay: true, // Set autoplay video: true/false. Default: false
});
