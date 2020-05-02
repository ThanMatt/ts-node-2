import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express()

app.use(express.urlencoded({ extended: false }))

app.use(cors())

mongoose.connect(process.env.MONGO_URL || 'mongodb://db:27017/mauch_bot', {
  useNewUrlParser: true,
  useFindAndModify: false,
  reconnectTries: 30,
  reconnectInterval: 500
})

mongoose.connection.once('open', () => {
  console.log('MongoDB connection: success')
})

console.log('test')
