const checkDeliveryOrder = event => {
  return !(event.destination?.city && event.destination?.state) &&
  event.status &&
  event.status.includes(process.env.MESSAGE_DELIVERY_ORDER)
}

module.exports = { checkDeliveryOrder }
