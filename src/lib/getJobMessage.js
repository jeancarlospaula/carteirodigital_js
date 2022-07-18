const {
  lastUpdateMessage,
  orderPostedMessage,
  orderDeliveredMessage,
  importOrderMessage,
  orderDeliveryMessage
} = require('../templates/messagesJob')
const { checkDeliveryOrder: isOrderDelivery } = require('../utils/checkDeliveryOrder')
const { checkImportationOrder: isImportationOrder } = require('../utils/checkImportationOrder')
const { checkOrderPosted: isOrderPosted } = require('../utils/checkOrderPosted')
const { checkUpdateOrder: isOrderWithUpdate } = require('../utils/checkUpdateOrder')

const getJobMessage = event => {
  if (isOrderWithUpdate(event)) return lastUpdateMessage(event)
  if (isImportationOrder(event)) return importOrderMessage(event)
  if (isOrderPosted(event)) return orderPostedMessage(event)
  if (isOrderDelivery(event)) return orderDeliveryMessage(event)

  return orderDeliveredMessage(event)
}

module.exports = { getJobMessage }
