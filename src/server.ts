import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import path from 'path'
import cors from 'cors'
import dotenv from 'dotenv'

import connectDB from '../config/db'

dotenv.config({ path: path.resolve(__dirname, '../config/config.env') })

// connect mongodb
connectDB()

const app = express()

app.use(cors())
// middleware
app.use(express.json())
app.use(morgan('tiny'))

const api = process.env.API_URL

app.get(`${api}/products`, (req, res) => {
  const product = {
    id: 1,
  }
  res.send(product)
})

app.post(`${api}/products`, (req, res) => {
  const newProduct = req.body
  console.info('通過', newProduct)
  res.send(newProduct)
})

app.listen(3000, () => {
  console.info('server start')
})
