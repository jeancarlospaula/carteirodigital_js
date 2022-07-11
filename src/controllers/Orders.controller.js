const { updateOrderEvent } = require('../lib/updateOrderEvent')
const { getLastUpdateMessage } = require('../lib/getLastUpdateMessage')
const Order = require('../repositories/order.repository')
const { Telegraf } = require('telegraf')
const User = require('../repositories/user.repository')
const bot = new Telegraf(process.env.BOT_TOKEN)

class OrdersController {
  static async updateAndNotify () {
    let orderId
    try {
      const orders = await Order.find({ delivered: false })

      if (!orders.length) return

      orders.forEach(async (order) => {
        const { chatId } = await User.findById(order.user)
        console.log(chatId)
        orderId = order._id
        const events = await updateOrderEvent(order)

        if (!events) return console.log(`Order ${orderId.toString()} has no new updates`)

        let delivered = false
        if (events[0].status.includes('Objeto entregue ao destinatário')) {
          delivered = true
        }

        bot.telegram.sendMessage(chatId, getLastUpdateMessage({ lastEvent: events[0], trackingCode: order.trackingCode }))

        await Order.findByIdAndUpdate(orderId, { events, delivered, notificationSent: true })
      })
    } catch (error) {
      if (orderId) {
        await Order.findByIdAndUpdate(orderId, { notificationSent: false })
      }
      console.log(error)
    }
  }
}

module.exports = OrdersController
