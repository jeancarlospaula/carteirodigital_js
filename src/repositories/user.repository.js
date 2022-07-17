const User = require('../models/user.model')

class UserRepository {
  static async insert ({ chatId, firstName, username }) {
    const user = new User({
      chatId,
      firstName,
      username
    })
    const newUser = await user.save()
    return newUser
  }

  static async findOne (conditions, projection) {
    const user = await User.findOne(conditions, projection)
    return user
  }

  static async findById (id, projection) {
    const user = await User.findById(id, projection)
    return user
  }

  static async findOneAndDelete (conditions) {
    await User.findOneAndDelete(conditions)
  }

  static async findOneAndUpdate (conditions, update) {
    const user = await User.findOneAndUpdate(conditions, update, { new: true })
    return user
  }
}

module.exports = UserRepository
