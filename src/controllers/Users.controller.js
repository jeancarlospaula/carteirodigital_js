const Order = require('../repositories/order.repository')
const User = require('../repositories/user.repository')

class UsersController {
  static async delete ({ chat }) {
    const { _id: user } = await User.findOne({ chatId: chat.id }, '_id')

    await Order.findAndDelete({ user })
    await User.findOneAndDelete({ _id: user })
  }
}

module.exports = UsersController
