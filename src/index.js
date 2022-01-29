import showGenerals from '@components/showGenerals.js'
import printIllus from '@components/printIllus.js'
import '@styles/home.css'
import Glide from '@glidejs/glide'

showGenerals('')
printIllus()


new Glide('.glide', {autoplay: 3000}).mount()


// INSTAGRAM FEED (JQUERY)
jQuery.fn.FCInstagram.accessData = {
    accessToken: process.env.API, // Token
};

$('#instafeed').FCInstagram({
    max: 1, // A number between 1 and 25 of photos to show. Default: 9
    autoplay: true, // Set autoplay video: true/false. Default: false
});




