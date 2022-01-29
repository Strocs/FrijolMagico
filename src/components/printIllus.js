import IllusSlider from '@templates/illusSlider.js'
import orderList from '@components/orderList.js'
import illustratorList from '@components/illustratorList.js'

const wrap = document.getElementsByClassName('ilus__list')[0]

const printIllus = () => {
  wrap.innerHTML = illustratorList(IllusSlider, orderList.shuffled)
}

export default printIllus;