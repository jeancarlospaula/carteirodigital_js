const lastUpdateMessage = ({
  trackingCode,
  status,
  cityOrigin,
  stateOrigin,
  typeOrigin,
  cityDestiny,
  stateDestiny,
  typeDestiny,
  dateUpdate,
  firstName
}) => `
*Sua encomenda se movimentoooou, ${firstName}!* 🛵 📦\n\n
*CÓDIGO*: ${trackingCode}\n\n
*STATUS*: ${status}\n\n
*ORIGEM*: ${cityOrigin.toUpperCase()} - ${stateOrigin.toUpperCase()} (${typeOrigin})\n\n
*DESTINO*: ${cityDestiny.toUpperCase()} - ${stateDestiny.toUpperCase()} (${typeDestiny})\n\n
*DATA DA ATUALIZAÇÃO*: ${dateUpdate}\n\n
*Assim que ela se movimentar novamente, eu passo aqui para te avisar, ok? Até logo!* 😃`

const orderDeliveredMessage = ({
  trackingCode,
  status,
  cityOrigin,
  stateOrigin,
  dateUpdate,
  firstName
}) => `
*Toc toc, sua encomenda chegou, ${firstName}! 📦*\n\n
*CÓDIGO*: ${trackingCode}\n\n
*STATUS*: ${status}\n\n
*LOCAL*: ${cityOrigin.toUpperCase()} - ${stateOrigin.toUpperCase()}\n\n
*DATA DA ATUALIZAÇÃO*: ${dateUpdate}\n\n
*Se quiser começar a rastrear um nova encomenda, é só digital o código dela aqui embaixo! 📫*`

const orderPostedMessage = ({
  trackingCode,
  status,
  cityOrigin,
  stateOrigin,
  dateUpdate,
  firstName
}) => `
*Logo sua encomenda começará a se movimentar, ${firstName}! 📦*\n\n
*CÓDIGO*: ${trackingCode}\n\n
*STATUS*: ${status}\n\n
*LOCAL*: ${cityOrigin.toUpperCase()} - ${stateOrigin.toUpperCase()}\n\n
*DATA DA ATUALIZAÇÃO*: ${dateUpdate}\n\n
*Assim que ela se movimentar novamente, eu passo aqui para te avisar, ok? Até logo!* 😃`

module.exports = {
  lastUpdateMessage,
  orderDeliveredMessage,
  orderPostedMessage
}
