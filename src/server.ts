import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import path from 'path'
import cors from 'cors'
import dotenv from 'dotenv'
// import Products from './models/Products'

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

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  countInStock: Number,
})

const Product = mongoose.model('Product', productSchema)

app.get(`${api}/products`, async (req, res) => {
  const product = {
    id: 1,
    name: 'sample',
    image: 'sample_url',
  }
  res.send(product)
})

app.post(`${api}/products`, (req, res) => {
  const product = new Product({
    name: req.body.name,
    image: req.body.image,
    countInStock: req.body.countInStock,
  })
  product
    .save()
    .then((createProduct: any) => {
      res.status(201).json(createProduct)
    })
    .catch((err: any) => {
      res.status(500).json({
        error: err,
        success: false,
      })
    })
})

app.listen(3000, () => {
  console.info('server start')
})
