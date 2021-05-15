const showImg = () => {

    let image1 = document.getElementsByClassName('ilus-page__images')[0]
    let image2 = document.getElementsByClassName('ilus-page__images')[1]
    let image3 = document.getElementsByClassName('ilus-page__images')[2]
    
    let detail1 = document.getElementsByClassName('images__img')[0]
    let detail2 = document.getElementsByClassName('images__img')[1]
    let detail3 = document.getElementsByClassName('images__img')[2]
    
    let imageBox = document.getElementsByClassName('images__container')[0] 
    let imageDetail = document.getElementsByClassName('images__detail')[0]
    
    const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (width >= 768) {
        
        return (
            //GENERAL
            
            imageBox.addEventListener('click', function(){
                imageBox.style.display = 'none'
                detail1.style.visibility = 'hidden'
                detail2.style.visibility = 'hidden'
                detail3.style.visibility = 'hidden'
            }),
   
            //IMAGES

            image1.addEventListener('click', function(){
                imageBox.style.display = 'inherit'
                detail1.style.visibility = 'visible'
            }),
            
            image2.addEventListener('click', function(){
                imageBox.style.display = 'inherit'
                detail2.style.visibility = 'visible'
            }),
            
            image3.addEventListener('click', function(){
                imageBox.style.display = 'inherit'
                detail3.style.visibility = 'visible'
            })

        )
   
    } else {
        return (
            imageBox.style.display = 'none',
            detail1.style.visibility = 'hidden',
            detail2.style.visibility = 'hidden',
            detail3.style.visibility = 'hidden'
       )
    }
}

export default showImg
