import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'Email is required']
  },
  photo: {
    type: String,
    required: true
  },
  pets: [{
    type: Schema.Types.ObjectId,
    ref: 'Pet'
  }]
}, { timestamps: true })

export default model('User', userSchema)
