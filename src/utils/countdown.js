const count = document.getElementById('countdown')
const change = document.getElementsByClassName('change')[0]

const changeCount = () => {
    $('.header__text').text('¡Bienvenidxs al Festival Frijol Mágico 2021!')
    count.style.display = 'none'
    change.style.display = 'flex'
}

simplyCountdown('#countdown', {
    year: 2021, // required
    month: 4, // required
    day: 16, // required
    hours: 18, // Default is 0 [0-23] integer
    minutes: 00, // Default is 0 [0-59] integer
    seconds: 00, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: { singular: 'Día', plural: 'Días' },
        hours: { singular: 'Hora', plural: 'Horas' },
        minutes: { singular: 'Minuto', plural: 'Minutos' },
        seconds: { singular: 'Segundo', plural: 'Segundos' }
    },

    plural: true, //use plurals
    inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
    // in case of inline set to false
    enableUtc: false, //Use UTC or not - default : false
    onEnd: function() {
        changeCount()
    }, //Callback on countdown end, put your own function here
    refresh: 1000, // default refresh every 1s
    sectionClass: 'simply-section', //section css class
    amountClass: 'simply-amount', // amount css class
    wordClass: 'simply-word', // word css class
    zeroPad: false,
    countUp: false
});


