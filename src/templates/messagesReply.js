const welcomeMessage = firstName =>
`Bem-vindo(a) ${firstName}, eu sou o *Carteiro Digital* 📦 e levarei até você todas as informações sobre as movimentações da sua encomenda.`

const firstCodeMessage = firstName =>
`Então, vamos lá ${firstName}.\n\n
Para rastrear sua encomenda é só digital o código dela, ok? Lembre-se de digital um código *válido para os correios do Brasil*.\n\n
⚠️ *Se a qualquer momento você quiser que eu pare de te enviar notificações e delete seu nome e códigos de rastreio dos meus registros, é só digitar /quit, beleza?*`

const invalidCodeMessage = (code, firstName) =>
`O código *${code}* não parece ser válido, ${firstName} ☹️\n
Vamos tentar rastrear sua encomenda novamente? Lembre-se de digital um código *válido para os correios do Brasil*.`

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
*Sua encomenda está a caminho, ${firstName}!* 🛵 📦\n\n
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
*Parece que sua encomenda já chegou, ${firstName}! 📦*\n\n
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

const errorMessage = firstName =>
`No momento estou tirando uma folga, ${firstName}. Pode tentar me enviar o código de ratreamento da sua encomenda mais tarde?`

const acceptTermsMessage = firstName =>
`${firstName}, para te enviar as notificações sobre a sua encomenda, precisarei registrar o seu *nome* e os *códigos de rastreio* das suas encomendas.\n\n
*Você aceita que eu registre essas informações?*`

const rejectedTermsMessage = firstName =>
`Sem problemas ${firstName}, assim que quiser começar a rastrear suas encomendas, é só clicar aqui embaixo! 😉`

const quitMessage = firstName =>
`⚠️ *Seu nome e os dados de rastreamento das suas encomendas foram excluídos dos meus registros.*\n\n 
Então, não vou mais te atualizar sobre a movimentação das suas encomendas, tudo bem?\n\n
Caso queira voltar a rastreá-las, é so clicar aqui embaixo! 😉`

module.exports = {
  welcomeMessage,
  firstCodeMessage,
  invalidCodeMessage,
  lastUpdateMessage,
  orderDeliveredMessage,
  orderPostedMessage,
  errorMessage,
  acceptTermsMessage,
  rejectedTermsMessage,
  quitMessage
}
