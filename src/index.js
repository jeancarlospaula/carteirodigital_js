require('dotenv').config()
const cron = require('node-cron')
const { connectDB } = require('../src/database/connection/connectDB.js')
const OrdersController = require('./controllers/Orders.controller')

const start = async () => {
  await connectDB()
  console.log('Worker running')

  // Job run at every 5 minutes
  cron.schedule('*/5 * * * *', async () => {
    await OrdersController.updateAndNotify()
  })
}

start()
