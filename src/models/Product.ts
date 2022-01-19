import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'Please add a name'],
    trim: true,
    maxlength: [50, 'Name can not be more than 50 characters'],
  },
  image: {
    type: String,
  },
  countInStock: {
    type: Number,
    required: true,
  },
})

export default mongoose.model('Product', ProductSchema)
