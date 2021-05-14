import showHeaderFooter from '@components/showHeaderFooter.js'
import IllusSlider from '@templates/illusSlider.js'
import illustratorList from '@components/illustratorList.js'
import orderList from '@components/orderList.js'
import '@styles/home.css'

showHeaderFooter('')

const wrap = document.getElementsByClassName('ilus__list')[0]
wrap.innerHTML = illustratorList(IllusSlider, orderList.shuffled)


// INSTAGRAM FEED (JQUERY)
jQuery.fn.FCInstagram.accessData = {
    accessToken: process.env.API, // Token
};

$('#instafeed').FCInstagram({
    max: 1, // A number between 1 and 25 of photos to show. Default: 9
    autoplay: true, // Set autoplay video: true/false. Default: false
});





