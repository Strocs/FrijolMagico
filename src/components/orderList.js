import _ from 'underscore/underscore-min'

const order = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

const orderList = {
  ordered: order,
  shuffled: _.shuffle(order)
}

export default orderList