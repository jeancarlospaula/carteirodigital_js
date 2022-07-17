const {
  lastUpdateMessage,
  orderPostedMessage,
  orderDeliveredMessage
} = require('../templates/messagesReply')
const { checkOrderPosted } = require('../utils/checkOrderPosted')

const getReplyMessage = event => {
  if (event.cityDestiny && event.stateDestiny && event.typeDestiny) {
    return lastUpdateMessage(event)
  }

  const isOrderPosted = checkOrderPosted(event.status)

  if (isOrderPosted) {
    return orderPostedMessage(event)
  }

  return orderDeliveredMessage(event)
}

module.exports = { getReplyMessage }
