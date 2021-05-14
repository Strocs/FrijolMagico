import showHeaderFooter from '@components/showHeaderFooter.js'
import illustratorList from '@components/illustratorList.js'
import Gallery from '@templates/gallery.js'
import orderList from '@components/orderList.js'
import '@styles/ilustradorxs.css'

showHeaderFooter('')

const wrap = document.getElementsByClassName('ilus__card-container')[0]
wrap.innerHTML = illustratorList(Gallery, orderList.ordered)





