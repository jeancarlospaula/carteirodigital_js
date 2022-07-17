const {
  errorMessage,
  welcomeMessage,
  invalidCodeMessage,
  acceptTermsMessage,
  rejectedTermsMessage,
  firstCodeMessage,
  quitMessage
} = require('../templates/messagesReply')
const { tracking } = require('../services/correios/tracking')
const { getLastUpdateMessage } = require('../lib/getLastUpdateMessage')
const { checkInvalidCode } = require('../utils/checkInvalidCode')
const { errorHandler } = require('../utils/errors/errorHandler')
const { fillNewOrder } = require('../lib/fillNewOrder')

const User = require('../../src/repositories/user.repository')
const Order = require('../repositories/order.repository')
const UsersController = require('./Users.controller')

class BotController {
  static async start ({ ctx, type }) {
    const chat = ctx.update?.message?.chat || ctx.update?.callback_query?.message?.chat
    try {
      const user = {
        chatId: chat.id,
        firstName: chat.first_name,
        username: chat.username
      }

      const userExists = await User.findOne({ chatId: chat.id }, 'chatId -_id')

      if (!userExists) {
        await User.insert(user)
      }

      const isfirstMessage = type === 'START'
      if (isfirstMessage) await ctx.replyWithMarkdown(welcomeMessage(chat.first_name))

      const buttons = [
        { text: 'ACEITO', callback_data: 'acceptedTerms' },
        { text: 'NÃO ACEITO', callback_data: 'rejectedTerms' }
      ]

      await ctx.replyWithMarkdown(acceptTermsMessage(chat.first_name), {
        reply_markup: {
          inline_keyboard: [buttons]
        }
      })
    } catch (error) {
      error.data = { chatId: chat.id }
      errorHandler(error)
      return ctx.replyWithMarkdown(errorMessage(chat.first_name))
    }
  }

  static async message (ctx) {
    const userMessage = ctx.update.message.text.toUpperCase()
    const chat = ctx.update.message.chat

    if (['/QUIT', '/quit'].includes(userMessage)) {
      return this.quit(ctx)
    }

    const trackingCode = userMessage
    try {
      const user = await User.findOne({ chatId: chat.id }, 'acceptedTerms -_id')

      if (!user) {
        return this.start({ ctx, type: 'START' })
      }

      const buttons = [
        { text: 'ACEITO', callback_data: 'acceptedTerms' },
        { text: 'NÃO ACEITO', callback_data: 'rejectedTerms' }
      ]

      if (!user.acceptedTerms) {
        return ctx.replyWithMarkdown(acceptTermsMessage(chat.first_name), {
          reply_markup: {
            inline_keyboard: [buttons]
          }
        })
      }

      const regex = /\W|_/
      const trackingData = !regex.test(trackingCode) ? await tracking(trackingCode) : null

      const invalidTrackingCode = Array.isArray(trackingData) ? checkInvalidCode(trackingData[0].mensagem) : true
      if (invalidTrackingCode) {
        return ctx.replyWithMarkdown(invalidCodeMessage(trackingCode, chat.first_name))
      }

      const trackingEvents = trackingData[0].eventos
      const { _id: userId, firstName } = await User.findOne({ chatId: chat.id }, '_id firstName')
      const newOrder = fillNewOrder({ userId, events: trackingEvents, trackingCode })

      const order = await Order.findOne({ trackingCode, user: userId })
      if (order) {
        await Order.findByIdAndUpdate(order._id, newOrder)
      } else {
        await Order.insert(newOrder)
      }

      const message = getLastUpdateMessage({ lastEvent: newOrder.events[0], trackingCode, type: 'MESSAGE', firstName })
      ctx.replyWithMarkdown(message)
    } catch (error) {
      error.data = { trackingCode, chatId: chat.id }
      errorHandler(error)
      return ctx.replyWithMarkdown(errorMessage(chat.first_name))
    }
  }

  static async acceptedTerms (ctx) {
    const chat = ctx.update.callback_query.message.chat
    try {
      await User.findOneAndUpdate({ chatId: chat.id }, { acceptedTerms: true })
      await ctx.replyWithMarkdown(firstCodeMessage(chat.first_name))
    } catch (error) {
      error.data = { chatId: chat.id }
      errorHandler(error)
      return ctx.replyWithMarkdown(errorMessage(chat.first_name))
    }
  }

  static async rejectedTerms (ctx) {
    const chat = ctx.update.callback_query.message.chat
    try {
      await UsersController.delete({ chat })

      const buttons = [
        { text: 'RASTREAR ENCOMENDA', callback_data: 'restart' }
      ]

      ctx.replyWithMarkdown(rejectedTermsMessage(chat.first_name), {
        reply_markup: {
          inline_keyboard: [buttons]
        }
      })
    } catch (error) {
      error.data = { chatId: chat.id }
      errorHandler(error)
      return ctx.replyWithMarkdown(errorMessage(chat.first_name))
    }
  }

  static async quit (ctx) {
    const chat = ctx.update.message.chat
    try {
      await UsersController.delete({ chat })

      const buttons = [
        { text: 'RASTREAR ENCOMENDA', callback_data: 'start' }
      ]

      return ctx.replyWithMarkdown(quitMessage(), {
        reply_markup: {
          inline_keyboard: [buttons]
        }
      })
    } catch (error) {
      error.data = { chatId: chat.id }
      errorHandler(error)
      return ctx.replyWithMarkdown(errorMessage(chat.first_name))
    }
  }
}

module.exports = BotController
