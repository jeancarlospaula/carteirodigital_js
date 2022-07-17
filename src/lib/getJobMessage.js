const {
  lastUpdateMessage,
  orderPostedMessage,
  orderDeliveredMessage
} = require('../templates/messagesJob')
const { checkOrderPosted } = require('../utils/checkOrderPosted')

const getJobMessage = event => {
  if (event.cityDestiny && event.stateDestiny && event.typeDestiny) {
    return lastUpdateMessage(event)
  }

  const isOrderPosted = checkOrderPosted(event.status)

  if (isOrderPosted) {
    return orderPostedMessage(event)
  }

  return orderDeliveredMessage(event)
}

module.exports = { getJobMessage }
