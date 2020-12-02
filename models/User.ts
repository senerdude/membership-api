import mongoose from 'mongoose'
import { nanoid } from 'nanoid'

// Email Schema
const emailSchema = new mongoose.Schema({
  address: { type: String, required: true, min: 6, max: 255 },
  verified: { type:String, required:true, default:false },
  code : { type: String, required: true, default: () => nanoid(10) }
})

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, min: 3, max: 255, },
  email : emailSchema,
  password: { type: String, required: true, min: 6, max: 1024, select: false },
  signUpDate: { type: Date, default: Date.now, }, 
  lastLogin: { type: Date, default: Date.now, }
});

export default mongoose.model('User', userSchema)