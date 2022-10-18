import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  User: { type: String, required: true, maxlength: 50 },
  email: { type: String, required: true, maxlength: 100, unique: true },
  text: { type: String, required: true, maxlength: 256 }
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
