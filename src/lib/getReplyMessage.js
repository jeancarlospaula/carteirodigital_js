const {
  lastUpdateMessage,
  orderPostedMessage,
  orderDeliveredMessage,
  importOrderMessage
} = require('../templates/messagesReply')
const { checkImportationOrder } = require('../utils/checkImportationOrder')
const { checkOrderPosted } = require('../utils/checkOrderPosted')

const getReplyMessage = event => {
  if (event.cityDestiny && event.stateDestiny && event.typeDestiny) {
    return lastUpdateMessage(event)
  }

  const isImportationOrder = checkImportationOrder(event)
  if (isImportationOrder) return importOrderMessage(event)

  const isOrderPosted = checkOrderPosted(event.status)

  if (isOrderPosted) {
    return orderPostedMessage(event)
  }

  return orderDeliveredMessage(event)
}

module.exports = { getReplyMessage }
