const { tracking } = require('../services/correios/tracking')
const { checkInvalidCode } = require('../utils/checkInvalidCode')
const { fillOrderEvents } = require('./fillOrderEvents')

const updateOrderEvent = async (order) => {
  const trackingData = await tracking(order.trackingCode)

  const invalidTrackingCode = Array.isArray(trackingData) ? checkInvalidCode(trackingData[0].mensagem) : true
  if (invalidTrackingCode) return

  const orderEvents = fillOrderEvents(trackingData[0].eventos)

  if (orderEvents.length && orderEvents.length <= order.events.length) return

  return orderEvents
}

module.exports = { updateOrderEvent }
