const { checkOrderPosted } = require('../utils/checkOrderPosted')
const { orderDeliveredMessage, lastUpdateMessage, orderPostedMessage } = require('./../templates/messages')

const getLastUpdateMessage = ({ lastEvent, trackingCode }) => {
  const event = {
    code: trackingCode,
    status: lastEvent.status,
    cityOrigin: lastEvent.location.city,
    stateOrigin: lastEvent.location.state,
    typeOrigin: lastEvent.location.type,
    cityDestiny: lastEvent.destination?.city,
    stateDestiny: lastEvent.destination?.state,
    typeDestiny: lastEvent.destination?.type,
    dateUpdate: lastEvent.dateUpdate
  }

  if (event.cityDestiny && event.stateDestiny && event.typeDestiny) {
    return lastUpdateMessage(event)
  }

  const isOrderPosted = checkOrderPosted(event.status)

  if (isOrderPosted) {
    return orderPostedMessage(event)
  }

  return orderDeliveredMessage(event)
}

module.exports = {
  getLastUpdateMessage
}
