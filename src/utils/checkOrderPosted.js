const checkOrderPosted = message => {
  return message && message.includes(process.env.MESSAGE_ORDER_POSTED)
}

module.exports = { checkOrderPosted }
