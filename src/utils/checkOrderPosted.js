const checkOrderPosted = event => {
  return event.status && event.status.includes(process.env.MESSAGE_ORDER_POSTED)
}

module.exports = { checkOrderPosted }
