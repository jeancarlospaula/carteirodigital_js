const { fillOrderEvents } = require('./fillOrderEvents')
const { checkDeliveredOrder } = require('./../utils/checkDeliveredOrder')

const fillNewOrder = ({ userId, events, trackingCode }) => {
  const orderEvents = fillOrderEvents(events)

  const isOrderDelivered = checkDeliveredOrder(orderEvents[0])

  const newOrder = {
    trackingCode,
    user: userId,
    events: orderEvents,
    notificationSent: true,
    delivered: isOrderDelivered
  }

  return newOrder
}

module.exports = { fillNewOrder }
