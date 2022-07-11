require('dotenv').config()
const cron = require('node-cron')
const OrdersController = require('./controllers/Orders.controller')
const connectDB = require('../src/database/connection/connectDB.js')

const start = async () => {
  await connectDB()
  console.log('Worker running')

  // Job run at every 5 minutes
  cron.schedule('*/5 * * * *', async () => {
    await OrdersController.updateAndNotify()
  })
}

start()
