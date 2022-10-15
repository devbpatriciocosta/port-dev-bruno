import mongoose from 'mongoose'
// eslint-disable-next-line no-unused-vars
import User from '../user/user.model'

const PostSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 256 },
  createdDate: { type: Date, required: true },
  user: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Name' }
})

export default mongoose.models.Post || mongoose.model('Post', PostSchema)
