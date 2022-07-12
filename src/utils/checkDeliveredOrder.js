const checkDeliveredOrder = message => {
  return message && message.includes(process.env.MESSAGE_DELIVERED_ORDER)
}

module.exports = { checkDeliveredOrder }
