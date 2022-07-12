const User = require('../models/user.model')

class UserRepository {
  static async findById (id, projection) {
    const user = await User.findById(id, projection)
    return user
  }
}

module.exports = UserRepository
