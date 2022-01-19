import { Request, Response, NextFunction } from 'express'
import Product from '../models/Product'
import asyncHandler from '../middleware/async'

export const getProducts = asyncHandler(async (req, res, next) => {
  const products = await Product.find()
  res
    .status(200)
    .json({ success: true, count: products.length, data: products })
})

export const createProduct = asyncHandler(async (req, res, next) => {
  const product = await Product.create(req.body)
  res.status(201).json({
    sucess: true,
    data: product,
  })
})

// app.post(`${api}/products`, async (req, res) => {
//   const product = await Product.create(req.body)

//   res.status(201).json({
//     success: true,
//     data: product,
//   })
// })
