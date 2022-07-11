const Order = require('../models/order.model')

class OrderRepository {
  static async findByIdAndUpdate (id, conditions) {
    const order = await Order.findByIdAndUpdate(id, conditions)
    return order
  }

  static async find (conditions) {
    const orders = await Order.find(conditions)
    return orders
  }
}

module.exports = OrderRepository
