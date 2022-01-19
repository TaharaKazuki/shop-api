import mongoose from 'mongoose'

const ProductsSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
  },
})

export default mongoose.model('Products', ProductsSchema)
