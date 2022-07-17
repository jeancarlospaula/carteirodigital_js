const {
  lastUpdateMessage,
  orderPostedMessage,
  orderDeliveredMessage,
  importOrderMessage
} = require('../templates/messagesJob')
const { checkImportationOrder } = require('../utils/checkImportationOrder')
const { checkOrderPosted } = require('../utils/checkOrderPosted')

const getJobMessage = event => {
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

module.exports = { getJobMessage }
