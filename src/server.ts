import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import path from 'path'
import cors from 'cors'
import dotenv from 'dotenv'
import Product from './models/Product'

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

app.get(`${api}/products`, async (req, res) => {
  const productList = await Product.find()
  res.send(productList)
})

app.post(`${api}/products`, async (req, res) => {
  const product = await Product.create(req.body)

  res.status(201).json({
    success: true,
    data: product,
  })
})

app.listen(3000, () => {
  console.info('server start')
})
