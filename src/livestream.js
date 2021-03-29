import Header from '@templates/Header.js'
import Footer from '@templates/Footer.js'
import '@styles/livestream.css'

(async function App() {
    const header = null || document.getElementsByClassName('header__container')[0];
    const footer = null || document.getElementsByClassName('footer__container')[0];
    header.innerHTML = await Header();
    footer.innerHTML = await Footer();
  })();



let frame = document.createElement("iframe");  
frame.referrerPolicy = "origin";  
frame.src = "https://www.youtube.com/live_chat?v=oVi5gtzTDx0&embed_domain=" + window.location.hostname;  
frame.frameBorder = "0";  
frame.id = "chat-embed";  
let wrapper = document.getElementById("chat-embed-wrapper");  
wrapper.appendChild(frame); 
