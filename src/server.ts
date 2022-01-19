import express from 'express'
import morgan from 'morgan'
import path from 'path'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config({ path: path.resolve(__dirname, '../config/config.env') })

const app = express()

app.use(cors())
// middleware
app.use(express.json())
app.use(morgan('tiny'))

const api = process.env.API_URL

app.get(`${api}/products`, (req, res) => {
  res.send('hello API')
})

app.listen(3000, () => {
  console.info('server start')
})
