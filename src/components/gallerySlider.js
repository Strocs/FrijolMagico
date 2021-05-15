import IllusSlider from '@templates/illusSlider.js'
import orderList from '@components/orderList.js'
import illustratorList from '@components/illustratorList.js'

const wrap = document.getElementsByClassName('ilus__list')[0]

const printIllus = () => {
  wrap.innerHTML = illustratorList(IllusSlider, orderList.shuffled)
}

const gallerySlider = () => {
  printIllus()

  let current = 0
  
  const prev = document.getElementsByClassName('prev')[0]
  const next = document.getElementsByClassName('next')[0]
  
  next.addEventListener('click', function() {
    let plus = current + 28
    
    if (wrap.style.marginLeft === '-476rem') {
      wrap.style.marginLeft = '0rem'
      current = 0 
      plus = 0
    } else {
      wrap.style.marginLeft = `-${plus}rem`
    }
    
    return current = plus;
  })

  prev.addEventListener('click', function() {
    let less = current - 28
    if (wrap.style.marginLeft === '0rem') {
      wrap.style.marginLeft = '-476rem'
      current = 476 
      less = 476
    } else {
      wrap.style.marginLeft = `-${less}rem`
    }
    return current = less;
  })
  
}

export default gallerySlider;