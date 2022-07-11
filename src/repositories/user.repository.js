const User = require('../models/user.model')

class UserRepository {
  static async findById (id) {
    const user = await User.findById(id)
    return user
  }
}

module.exports = UserRepository
