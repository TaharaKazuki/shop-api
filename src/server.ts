import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import path from 'path'
import cors from 'cors'
import dotenv from 'dotenv'
import Product from './models/Product'
import connectDB from '../config/db'
import products from './routers/products'

// get env file
dotenv.config({ path: path.resolve(__dirname, '../config/config.env') })

// connect mongodb
connectDB()

const app = express()

// middleware
app.use(cors())
app.use(express.json())
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('tiny'))
}

const api = process.env.API_URL

// setting router
app.use(`${api}/products`, products)

const PORT = process.env.PORT || 3000
const server = app.listen(PORT, () => {
  console.info(`Server runing is ${process.env.NODE_ENV} mode on port ${PORT}`)
})

process.on('unhandledRejection', (err: Error) => {
  console.info(`Error: ${err.message}`)
  server.close(() => process.exit(1))
})
// app.get(`${api}/products`, async (req, res) => {
//   const productList = await Product.find()
//   res.send(productList)
// })

// app.post(`${api}/products`, async (req, res) => {
//   const product = await Product.create(req.body)

//   res.status(201).json({
//     success: true,
//     data: product,
//   })
// })
