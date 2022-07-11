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
*CÓDIGO*: ${code}\n\n
*STATUS*: ${status}\n\n
*ORIGEM*: ${cityOrigin.toUpperCase()} - ${stateOrigin.toUpperCase()} (${typeOrigin})\n\n
*DESTINO*: ${cityDestiny.toUpperCase()} - ${stateDestiny.toUpperCase()} (${typeDestiny})\n\n
*DATA DA ATUALIZAÇÃO*: ${dateUpdate}\n\n
*Estou trabalhando e em breve quero poder te avisar sempre que a sua encomenda se movimentar* 😃`

const orderDeliveredMessage = ({
  code,
  status,
  cityOrigin,
  stateOrigin,
  dateUpdate
}) => `
*CÓDIGO*: ${code}\n\n
*STATUS*: ${status}\n\n
*LOCAL*: ${cityOrigin.toUpperCase()} - ${stateOrigin.toUpperCase()}\n\n
*DATA DA ATUALIZAÇÃO*: ${dateUpdate}\n\n
*Toc toc, sua encomenda chegou! 📦*`

module.exports = {
  lastUpdateMessage,
  orderDeliveredMessage
}
