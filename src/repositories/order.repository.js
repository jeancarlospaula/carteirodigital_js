const Order = require('../models/order.model')

class OrderRepository {
  static async insert ({
    trackingCode,
    user,
    events,
    notificationSent,
    delivered
  }) {
    const order = new Order({
      trackingCode,
      user,
      events,
      notificationSent,
      delivered
    })
    const newOrder = await order.save()
    return newOrder
  }

  static async findByIdAndUpdate (id, conditions) {
    const order = await Order.findByIdAndUpdate(id, conditions)
    return order
  }

  static async findOne (conditions, projection) {
    const order = await Order.findOne(conditions, projection)
    return order
  }

  static async find (conditions) {
    const orders = await Order.find(conditions)
    return orders
  }

  static async findAndDelete (conditions) {
    await Order.deleteMany(conditions)
  }
}

module.exports = OrderRepository
