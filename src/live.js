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



// // SET WHAT VIDEO IS SETTED
// const setYoutubeVideo = () => {
//     let videoDay = ''
//     if (dayOne <= 0 && dayTwo > 0) {
//         return  videoDay = firstVideo;
//     } else if (dayTwo <= 0 && dayThree > 0 ) {
//         return  videoDay = secondVideo;
//     } else if (dayThree <= 0 ) {
//         return  videoDay = thirdVideo;
//     } 
// }

// const videoDay = setYoutubeVideo()

// // PRINT VIDEO IN HTML
// const printVideo = (a) => {
//     const yt = `<iframe class="youtube__embed" src="https://www.youtube.com/embed/${a}?autoplay=1" frameborder="0"  allowfullscreen></iframe>`
//     const youtubeWrap = document.getElementsByClassName('stream__youtube')[0]
//     youtubeWrap.innerHTML = yt
// }
// printVideo(videoDay)

// // PRINT CHAT IN HTML
// const printChat = (b) => {
//     let frame = document.createElement("iframe");  
//     frame.referrerPolicy = "origin";  
//     frame.src = `https://www.youtube.com/live_chat?v=${b}&embed_domain=` + window.location.hostname;  
//     frame.frameBorder = "0";  
//     frame.class = "chat__embed";  
//     let wrapper = document.getElementsByClassName("chat__wrapper")[0];  
//     wrapper.appendChild(frame); 
// }
// printChat(videoDay)


// // CHANGE NAME OF SCHEDULE SLIDE 
// const changeName = (day) => titleWrap.textContent = day;


// CHANGE DAYS OF SCHEDULE 
// const changeDay = () => {

//     if (dayOne <= 0 && dayTwo > 0) {
//         return  move.style.marginLeft = '0px', 
//                 days = 'Viernes 16',
//                 changeName(days);
//     } else if (dayTwo <= 0 && dayThree > 0 ) {
//         return  move.style.marginLeft = '-320px', 
//                 days = 'Sábado 17',
//                 changeName(days);
//     } else if (dayThree <= 0 ) {
//         return  move.style.marginLeft = '-640px', 
//                 days = 'Domingo 18',
//                 changeName(days);
//     } 
// }




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
// const currentArtist = () => {
        
//     const schedule = document.getElementsByClassName('schedule')

//     const firstDay = new Date('April 16, 2021 18:00:00')
//     const secondDay = new Date('April 17, 2021 17:30:00')
//     const thirdDay = new Date('April 18, 2021 17:30:00')
 
//     const getFirstDay = firstDay - currentTime
//     const getSecondDay = secondDay - currentTime
//     const getThirdDay = thirdDay - currentTime

//     let artistWrap  = document.getElementsByClassName('schedule__artist')
//     let artist      = document.getElementsByClassName('artist')      


//     const scheduleTimer = (last, current, day, timer, scroll) => {
//         setTimeout(function() {
//             console.log(last)
//             artistWrap[last].removeAttribute('id')
//             artist[last].removeAttribute('id')
//             artistWrap[current].setAttribute('id', 'schedule__artist-selected')
//             artist[current].setAttribute('id', 'artist-selected')
//             schedule[day].scrollTop = scroll
//         }, timer)
//     }

//     scheduleTimer(7, 0, 0, getFirstDay, 0)
//     scheduleTimer(0, 1, 0, getFirstDay+5000, 100)
//     scheduleTimer(1, 2, 0, getFirstDay+10000, 200)
//     scheduleTimer(2, 3, 0, getFirstDay+20000, 300)
//     scheduleTimer(3, 4, 0, getFirstDay+25000, 400)
//     scheduleTimer(4, 5, 0, getFirstDay+30000, 500)
//     scheduleTimer(5, 6, 0, getFirstDay+35000, 600)
//     scheduleTimer(6, 7, 0, getFirstDay+40000, 700)
//     scheduleTimer(7, null, 0, getFirstDay+45000, 0)
    
//     scheduleTimer(7, 8, 1, getSecondDay, 0)
//     scheduleTimer(8, 9, 1, getSecondDay+5000, 100)
//     scheduleTimer(9, 10, 1, getSecondDay+10000, 200)
//     scheduleTimer(10, 11, 1, getSecondDay+20000, 300)
//     scheduleTimer(11, 12, 1, getSecondDay+25000, 400)
//     scheduleTimer(12, 13, 1, getSecondDay+30000, 500)
//     scheduleTimer(13, 14, 1, getSecondDay+35000, 600)
//     scheduleTimer(14, 15, 1, getSecondDay+40000, 700)
//     scheduleTimer(15, null, 1, getSecondDay+45000, 0)

//     scheduleTimer(15, 16, 2, getThirdDay, 0)
//     scheduleTimer(16, 17, 2, getThirdDay+5000, 100)
//     scheduleTimer(17, 18, 2, getThirdDay+10000, 200)
//     scheduleTimer(18, 19, 2, getThirdDay+20000, 300)
//     scheduleTimer(19, 20, 2, getThirdDay+25000, 400)
//     scheduleTimer(20, 21, 2, getThirdDay+30000, 500)
//     scheduleTimer(21, 22, 2, getThirdDay+35000, 600)
//     scheduleTimer(22, 23, 2, getThirdDay+40000, 700)
//     scheduleTimer(23, null, 2, getThirdDay+45000, 0)

// }

// currentArtist()







