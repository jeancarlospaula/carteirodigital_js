const { Schema, model: Model } = require('mongoose')

const UserSchema = new Schema({
  chatId: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: false
  },
  acceptedTerms: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

const User = new Model('Users', UserSchema)

module.exports = User
