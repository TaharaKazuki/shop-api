import monggse from 'mongoose'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(__dirname, '../config/config.env') })

const connectDB = async () => {
  const connect = await monggse.connect(process.env.MONGO_URI!)
  console.info(`MongoDB Connected: ${connect.connection.host}`)
}

export default connectDB
