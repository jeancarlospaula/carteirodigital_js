const checkInvalidCode = (message) => {
  return message && message.includes(process.env.MESSAGE_INVALID_TRACKING_CODE)
}

module.exports = { checkInvalidCode }
