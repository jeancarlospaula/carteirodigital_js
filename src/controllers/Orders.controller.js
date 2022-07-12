const Order = require('../repositories/order.repository')
const User = require('../repositories/user.repository')
const { updateOrderEvent } = require('../lib/updateOrderEvent')
const { getLastUpdateMessage } = require('../lib/getLastUpdateMessage')
const { notifyTelegram } = require('../services/telegram/notifyTelegram')
const { checkDeliveredOrder } = require('../utils/checkDeliveredOrder')

class OrdersController {
  static async updateAndNotify () {
    try {
      const orders = await Order.find({ delivered: false })

      if (!orders.length) return console.log('All orders have been delivered')

      await Promise.all(orders.map(async (order) => {
        let orderId
        let events
        try {
          const { chatId, firstName } = await User.findById(order.user, 'chatId firstName -_id')
          events = await updateOrderEvent(order)

          orderId = order._id
          if (!events) return console.log(`Order ${orderId.toString()} has no new updates`)

          await notifyTelegram({
            chatId,
            message: getLastUpdateMessage({ lastEvent: events[0], trackingCode: order.trackingCode, firstName })
          })

          const isOrderDelivered = checkDeliveredOrder(events[0].status)
          await Order.findByIdAndUpdate(orderId, { events, delivered: isOrderDelivered, notificationSent: true })
        } catch (error) {
          if (orderId && events) {
            await Order.findByIdAndUpdate(orderId, { notificationSent: false })
          }
          console.log(error)
        }
      }))
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = OrdersController
