const { Telegraf } = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN)

const notifyTelegram = ({ chatId, message }) => {
  bot.telegram.sendMessage(chatId, message, { parse_mode: 'Markdown' })
    .then(_ => console.log(`Notification sent to chat ${chatId}`))
    .catch((error) => {
      console.log(`Error sending notification to chat ${chatId}`)
      throw error
    })
}

module.exports = { notifyTelegram }
