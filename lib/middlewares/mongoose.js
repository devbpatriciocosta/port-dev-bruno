import mongoose from 'mongoose'

const MONGODB_URI =
  'mongodb+srv://brunoportfolio:fUOOvpHOOk4jfe58@cluster-db-portofolio.dc1qlyz.mongodb.net/?retryWrites=true&w=majority'

const databaseMiddleware = async (req, res, next) => {
  try {
    if (!global.mongoose) {
      global.mongoose = await mongoose.connect(MONGODB_URI)
    }
  } catch (err) {
    console.err(err)
    res.status(500).send('database error')
  }
  return next()
}

export default databaseMiddleware
