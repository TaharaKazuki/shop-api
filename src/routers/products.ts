import express, { Router } from 'express'
import { getProducts, createProduct } from '../controller/products'

const router: Router = express.Router()

router.route('/').get(getProducts).post(createProduct)

export default router
