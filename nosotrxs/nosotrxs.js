let cami = document.getElementsByClassName('cami__img')[0]
    camiInfo = document.getElementsByClassName('detail__cami-box')[0]

    javier = document.getElementsByClassName('javier__img')[0]
    javierInfo = document.getElementsByClassName('detail__javier-box')[0]

    nacho = document.getElementsByClassName('nacho__img')[0]
    nachoInfo = document.getElementsByClassName('detail__nacho-box')[0]

    gary = document.getElementsByClassName('gary__img')[0]
    garyInfo = document.getElementsByClassName('detail__gary-box')[0]

    martin = document.getElementsByClassName('martin__img')[0]
    martinInfo = document.getElementsByClassName('detail__martin-box')[0]

    detailBox = document.getElementsByClassName('detail__container')[0]
    memberCard = document.getElementsByClassName('detail__card')[0]
    closeBtn = document.getElementsByClassName('detail__close-btn')[0]

cami.addEventListener('click', function(){
    detailBox.style.display = 'inherit'
    camiInfo.style.visibility = 'visible'
})

javier.addEventListener('click', function(){
    detailBox.style.display = 'inherit'
    javierInfo.style.visibility = 'visible'
})

nacho.addEventListener('click', function(){
    detailBox.style.display = 'inherit'
    nachoInfo.style.visibility = 'visible'
})
gary.addEventListener('click', function(){
    detailBox.style.display = 'inherit'
    garyInfo.style.visibility = 'visible'
})
martin.addEventListener('click', function(){
    detailBox.style.display = 'inherit'
    martinInfo.style.visibility = 'visible'
})

memberCard.addEventListener('click', function(){
    event.stopPropagation();
})

detailBox.addEventListener('click', function(){
    detailBox.style.display = 'none'
    camiInfo.style.visibility = 'hidden'
    javierInfo.style.visibility = 'hidden'
    nachoInfo.style.visibility = 'hidden'
    garyInfo.style.visibility = 'hidden'
    martinInfo.style.visibility = 'hidden'
})

closeBtn.addEventListener('click', function(){
    detailBox.style.display = 'none'
    camiInfo.style.visibility = 'hidden'
    javierInfo.style.visibility = 'hidden'
    nachoInfo.style.visibility = 'hidden'
    garyInfo.style.visibility = 'hidden'
    martinInfo.style.visibility = 'hidden'
})

