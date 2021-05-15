import showGenerals from '@components/showGenerals.js'
import illustratorList from '@components/illustratorList.js'
import Gallery from '@templates/gallery.js'
import orderList from '@components/orderList.js'
import '@styles/ilustradorxs.css'

showGenerals('')

const wrap = document.getElementsByClassName('ilus__card-container')[0]
wrap.innerHTML = illustratorList(Gallery, orderList.ordered)





