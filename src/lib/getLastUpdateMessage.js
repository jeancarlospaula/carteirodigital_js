const { getJobMessage } = require('./getJobMessage')
const { getReplyMessage } = require('./getReplyMessage')

const getLastUpdateMessage = ({ lastEvent, trackingCode, firstName, type }) => {
  const event = {
    status: lastEvent.status,
    cityOrigin: lastEvent.location.city,
    stateOrigin: lastEvent.location.state,
    typeOrigin: lastEvent.location.type,
    cityDestiny: lastEvent.destination?.city,
    stateDestiny: lastEvent.destination?.state,
    typeDestiny: lastEvent.destination?.type,
    dateUpdate: lastEvent.dateUpdate,
    trackingCode,
    firstName
  }

  if (type === 'MESSAGE') {
    return getReplyMessage(event)
  }

  return getJobMessage(event)
}

module.exports = {
  getLastUpdateMessage
}
