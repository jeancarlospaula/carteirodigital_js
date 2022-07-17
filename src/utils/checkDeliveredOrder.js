const checkDeliveredOrder = event => {
  return !(event.destination?.city && event.destination?.state) &&
  event.status &&
  event.status.includes(process.env.MESSAGE_DELIVERED_ORDER)
}

module.exports = { checkDeliveredOrder }
