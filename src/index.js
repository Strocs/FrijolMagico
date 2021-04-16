import Header from '@templates/Header.js'
import Footer from '@templates/Footer.js'
import '@styles/livestream.css'

(async function App() {
    const header = null || document.getElementsByClassName('header__container')[0];
    const footer = null || document.getElementsByClassName('footer__container')[0];
    header.innerHTML = await Header();
    footer.innerHTML = await Footer();
  })();



// GLOBAL VARIABLES
const currentTime = new Date()

const titleWrap = document.getElementsByClassName('schedule__nav-title')[0];

const move = document.getElementsByClassName('schedule__wrap')[0];

const first = new Date("April 15, 2021 00:00:00")
const second = new Date("April 16, 2021 21:30:00")
const third = new Date("April 17, 2021 21:30:00")
const dayOne = first - currentTime;
const dayTwo = second - currentTime;
const dayThree = third - currentTime;

const prev = document.getElementsByClassName('prev')[0];
const next = document.getElementsByClassName('next')[0];


const firstVideo = 'K0wNji7fWt8'
const secondVideo = '9IrEYZS9PUo'
const thirdVideo = 'WKRSuM85YEQ'



// SET WHAT VIDEO IS SETTED
const setYoutubeVideo = () => {
    let videoDay = ''
    if (dayOne <= 0 && dayTwo > 0) {
        return  videoDay = firstVideo;
    } else if (dayTwo <= 0 && dayThree > 0 ) {
        return  videoDay = secondVideo;
    } else if (dayThree <= 0 ) {
        return  videoDay = thirdVideo;
    } 
}

const videoDay = setYoutubeVideo()

// PRINT VIDEO IN HTML
const printVideo = (a) => {
    const yt = `<iframe class="youtube__embed" src="https://www.youtube.com/embed/${a}?autoplay=1" frameborder="0"  allowfullscreen></iframe>`
    const youtubeWrap = document.getElementsByClassName('stream__youtube')[0]
    youtubeWrap.innerHTML = yt
}
printVideo(videoDay)

// PRINT CHAT IN HTML
const printChat = (b) => {
    let frame = document.createElement("iframe");  
    frame.referrerPolicy = "origin";  
    frame.src = `https://www.youtube.com/live_chat?v=${b}&embed_domain=` + window.location.hostname;  
    frame.frameBorder = "0";  
    frame.class = "chat__embed";  
    let wrapper = document.getElementsByClassName("chat__wrapper")[0];  
    wrapper.appendChild(frame); 
}
printChat(videoDay)


// CHANGE NAME OF SCHEDULE SLIDE 
const changeName = (day) => {
    return titleWrap.textContent = day;
}


// CHANGE DAYS OF SCHEDULE 
const changeDay = () => {

    if (dayOne <= 0 && dayTwo > 0) {
        return  move.style.marginLeft = '0px', 
                days = 'Viernes 16',
                changeName(days);
    } else if (dayTwo <= 0 && dayThree > 0 ) {
        return  move.style.marginLeft = '-320px', 
                days = 'Sábado 17',
                changeName(days);
    } else if (dayThree <= 0 ) {
        return  move.style.marginLeft = '-640px', 
                days = 'Domingo 18',
                changeName(days);
    } 
}




// CHANGE DAYS WITH TOGGLE BUTTONS  
let setDay = changeDay()
let days = setDay

prev.onclick = () => {prevBtn()}
next.onclick = () => {nextBtn()}

const prevBtn = () => {
    if (days === 'Viernes 16') {
        return  move.style.marginLeft = '-640px', 
                days = 'Domingo 18',
                changeName(days);
    } else if (days === 'Sábado 17' ) {
        return  move.style.marginLeft = '0px', 
                days = 'Viernes 16',
                changeName(days);
    } else if (days === 'Domingo 18') {
        return  move.style.marginLeft = '-320px', 
                days = 'Sábado 17',
                changeName(days);
    }
}

const nextBtn = () => {
    if (days === 'Viernes 16') {
        return  move.style.marginLeft = '-320px', 
                days = 'Sábado 17',
                changeName(days);

    } else if (days === 'Sábado 17' ) {
        return  move.style.marginLeft = '-640px', 
                days = 'Domingo 18',
                changeName(days);

    } else if (days === 'Domingo 18') {
        return  move.style.marginLeft = '0px', 
                days = 'Viernes 16',
                changeName(days);
    }
}



// SELECT CURRENT ARTIST 
const currentArtist = () => {
        
    const schedule = document.getElementsByClassName('schedule')

    const firstDay = new Date('April 16, 2021 18:00:00')
    const secondDay = new Date('April 17, 2021 17:30:00')
    const thirdDay = new Date('April 18, 2021 17:30:00')

    const getFirstDay = firstDay - currentTime
    const getSecondDay = secondDay - currentTime
    const getThirdDay = thirdDay - currentTime

    let artistWrap  = document.getElementsByClassName('schedule__artist')
    let artist      = document.getElementsByClassName('artist')      

    const two = 120000
    const five = 300000 
    const ten = 600000
    const hour = ten*6
    const twoHour = hour*2

    // first day = 0-7
    setTimeout(function() {
        artistWrap[0].setAttribute('id', 'schedule__artist-selected')
        artist[0].setAttribute('id', 'artist-selected')
        schedule[0].scrollTop = 0
    }, getFirstDay)

    setTimeout(function() {
        artistWrap[0].removeAttribute('id')
        artist[0].removeAttribute('id')
        artistWrap[1].setAttribute('id', 'schedule__artist-selected')
        artist[1].setAttribute('id', 'artist-selected')
        schedule[0].scrollTop = 100
    }, getFirstDay+(ten*3))

    setTimeout(function() {
        artistWrap[1].removeAttribute('id')
        artist[1].removeAttribute('id')
        artistWrap[2].setAttribute('id', 'schedule__artist-selected')
        artist[2].setAttribute('id', 'artist-selected')
        schedule[0].scrollTop = 200
    }, getFirstDay+five+(ten*4))

    setTimeout(function() {
        artistWrap[2].removeAttribute('id')
        artist[2].removeAttribute('id')
        artistWrap[3].setAttribute('id', 'schedule__artist-selected')
        artist[3].setAttribute('id', 'artist-selected')
        schedule[0].scrollTop = 300
    }, getFirstDay+hour)

    setTimeout(function() {
        artistWrap[3].removeAttribute('id')
        artist[3].removeAttribute('id')
        artistWrap[4].setAttribute('id', 'schedule__artist-selected')
        artist[4].setAttribute('id', 'artist-selected')
        schedule[0].scrollTop = 400
    }, getFirstDay+hour+(ten*4))

    setTimeout(function() {
        artistWrap[4].removeAttribute('id')
        artist[4].removeAttribute('id')
        artistWrap[5].setAttribute('id', 'schedule__artist-selected')
        artist[5].setAttribute('id', 'artist-selected')
        schedule[0].scrollTop = 500
    }, getFirstDay+twoHour)

    setTimeout(function() {
        artistWrap[5].removeAttribute('id')
        artist[5].removeAttribute('id')
        artistWrap[6].setAttribute('id', 'schedule__artist-selected')
        artist[6].setAttribute('id', 'artist-selected')
        schedule[0].scrollTop = 600
    }, getFirstDay+twoHour+(ten*2))

    setTimeout(function() {
        artistWrap[6].removeAttribute('id')
        artist[6].removeAttribute('id')
        artistWrap[7].setAttribute('id', 'schedule__artist-selected')
        artist[7].setAttribute('id', 'artist-selected')
    }, getFirstDay+twoHour+(ten*4))

    setTimeout(function() {
        artistWrap[7].removeAttribute('id')
        artist[7].removeAttribute('id')
        schedule[0].scrollTop = 0
    }, getFirstDay+(hour*3)+five)



    // second day = 8 - 15
    setTimeout(function() {
        artistWrap[8].setAttribute('id', 'schedule__artist-selected')
        artist[8].setAttribute('id', 'artist-selected')
        schedule[1].scrollTop = 0
    }, getSecondDay)

    setTimeout(function() {
        artistWrap[8].removeAttribute('id')
        artist[8].removeAttribute('id')
        artistWrap[9].setAttribute('id', 'schedule__artist-selected')
        artist[9].setAttribute('id', 'artist-selected')
        schedule[1].scrollTop = 100
    }, getSecondDay+(ten*3))

    setTimeout(function() {
        artistWrap[9].removeAttribute('id')
        artist[9].removeAttribute('id')
        artistWrap[10].setAttribute('id', 'schedule__artist-selected')
        artist[10].setAttribute('id', 'artist-selected')
        schedule[1].scrollTop = 200
    }, getSecondDay+(ten*4))

    setTimeout(function() {
        artistWrap[10].removeAttribute('id')
        artist[10].removeAttribute('id')
        artistWrap[11].setAttribute('id', 'schedule__artist-selected')
        artist[11].setAttribute('id', 'artist-selected')
        schedule[1].scrollTop = 300
    }, getSecondDay+hour+ten)

    setTimeout(function() {
        artistWrap[11].removeAttribute('id')
        artist[11].removeAttribute('id')
        artistWrap[12].setAttribute('id', 'schedule__artist-selected')
        artist[12].setAttribute('id', 'artist-selected')
        schedule[1].scrollTop = 400
    }, getSecondDay+hour+(ten*2))

    setTimeout(function() {
        artistWrap[12].removeAttribute('id')
        artist[12].removeAttribute('id')
        artistWrap[13].setAttribute('id', 'schedule__artist-selected')
        artist[13].setAttribute('id', 'artist-selected')
        schedule[1].scrollTop = 500
    }, getSecondDay+twoHour-five)

    setTimeout(function() {
        artistWrap[13].removeAttribute('id')
        artist[13].removeAttribute('id')
        artistWrap[14].setAttribute('id', 'schedule__artist-selected')
        artist[14].setAttribute('id', 'artist-selected')
        schedule[1].scrollTop = 600
    }, getSecondDay+twoHour+(ten*2))

    setTimeout(function() {
        artistWrap[14].removeAttribute('id')
        artist[14].removeAttribute('id')
        artistWrap[15].setAttribute('id', 'schedule__artist-selected')
        artist[15].setAttribute('id', 'artist-selected')
    }, getSecondDay+twoHour+(ten*3))

    setTimeout(function() {
        artistWrap[15].removeAttribute('id')
        artist[15].removeAttribute('id')
        schedule[1].scrollTop = 0
    }, getSecondDay+twoHour+(hour-five))



    // third day = 16 - 23
     setTimeout(function() {
        artistWrap[16].setAttribute('id', 'schedule__artist-selected')
        artist[16].setAttribute('id', 'artist-selected')
        schedule[2].scrollTop = 0
    }, getThirdDay)

    setTimeout(function() {
        artistWrap[16].removeAttribute('id')
        artist[16].removeAttribute('id')
        artistWrap[17].setAttribute('id', 'schedule__artist-selected')
        artist[17].setAttribute('id', 'artist-selected')
        schedule[2].scrollTop = 100
    }, getThirdDay+(ten*3))

    setTimeout(function() {
        artistWrap[17].removeAttribute('id')
        artist[17].removeAttribute('id')
        artistWrap[18].setAttribute('id', 'schedule__artist-selected')
        artist[18].setAttribute('id', 'artist-selected')
        schedule[2].scrollTop = 200
    }, getThirdDay+(ten*4))

    setTimeout(function() {
        artistWrap[18].removeAttribute('id')
        artist[18].removeAttribute('id')
        artistWrap[19].setAttribute('id', 'schedule__artist-selected')
        artist[19].setAttribute('id', 'artist-selected')
        schedule[2].scrollTop = 300
    }, getThirdDay+(ten*5))

    setTimeout(function() {
        artistWrap[19].removeAttribute('id')
        artist[19].removeAttribute('id')
        artistWrap[20].setAttribute('id', 'schedule__artist-selected')
        artist[20].setAttribute('id', 'artist-selected')
        schedule[2].scrollTop = 400
    }, getThirdDay+twoHour-(ten*2))

    setTimeout(function() {
        artistWrap[20].removeAttribute('id')
        artist[20].removeAttribute('id')
        artistWrap[21].setAttribute('id', 'schedule__artist-selected')
        artist[21].setAttribute('id', 'artist-selected')
        schedule[2].scrollTop = 500
    }, getThirdDay+twoHour+ten)

    setTimeout(function() {
        artistWrap[21].removeAttribute('id')
        artist[21].removeAttribute('id')
        artistWrap[22].setAttribute('id', 'schedule__artist-selected')
        artist[22].setAttribute('id', 'artist-selected')
        schedule[2].scrollTop = 600
    }, getThirdDay+twoHour+hour)

    setTimeout(function() {
        artistWrap[22].removeAttribute('id')
        artist[22].removeAttribute('id')
        artistWrap[23].setAttribute('id', 'schedule__artist-selected')
        artist[23].setAttribute('id', 'artist-selected')
    }, getThirdDay+twoHour+hour+ten)

    setTimeout(function() {
        artistWrap[23].removeAttribute('id')
        artist[23].removeAttribute('id')
        schedule[2].scrollTop = 0
    }, getThirdDay+twoHour+hour+(ten*3))   
}

currentArtist()







