const lastUpdateMessage = ({
  code,
  status,
  cityOrigin,
  stateOrigin,
  typeOrigin,
  cityDestiny,
  stateDestiny,
  typeDestiny,
  dateUpdate
}) => `
*Sua encomenda se movimentoooou!* 🛵 📦\n\n
*CÓDIGO*: ${code}\n\n
*STATUS*: ${status}\n\n
*ORIGEM*: ${cityOrigin.toUpperCase()} - ${stateOrigin.toUpperCase()} (${typeOrigin})\n\n
*DESTINO*: ${cityDestiny.toUpperCase()} - ${stateDestiny.toUpperCase()} (${typeDestiny})\n\n
*DATA DA ATUALIZAÇÃO*: ${dateUpdate}\n\n
*Assim que ela se movimentar novamente passou aqui para te avisar, ok? Até logo!* 😃`

const orderDeliveredMessage = ({
  code,
  status,
  cityOrigin,
  stateOrigin,
  dateUpdate
}) => `
*Toc toc, sua encomenda chegou! 📦*\n\n
*CÓDIGO*: ${code}\n\n
*STATUS*: ${status}\n\n
*LOCAL*: ${cityOrigin.toUpperCase()} - ${stateOrigin.toUpperCase()}\n\n
*DATA DA ATUALIZAÇÃO*: ${dateUpdate}`

const orderPostedMessage = ({
  code,
  status,
  cityOrigin,
  stateOrigin,
  dateUpdate
}) => `
*Logo sua encomenda começará a se movimentar! 📦*\n\n
*CÓDIGO*: ${code}\n\n
*STATUS*: ${status}\n\n
*LOCAL*: ${cityOrigin.toUpperCase()} - ${stateOrigin.toUpperCase()}\n\n
*DATA DA ATUALIZAÇÃO*: ${dateUpdate}\n\n`

module.exports = {
  lastUpdateMessage,
  orderDeliveredMessage,
  orderPostedMessage
}
