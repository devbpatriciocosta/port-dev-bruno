import Joi from 'joi'
import createHandler from '../../../lib/middlewares/nextConnect'

import validate from '../../../lib/middlewares/validation'

import { nameUser } from '../../../modules/user/user.service'

const postSchema = Joi.object({
  Name: Joi.string().required().max(50),
  email: Joi.string().email().required().max(100),
  text: Joi.string().required().max(256)
})

const message = createHandler()

message.post(validate({ body: postSchema }), async (req, res) => {
  try {
    const message = await nameUser(req.body)
    res.status(201).json(message)
  } catch (err) {
    console.error(err)
    throw err
  }
})

export default message
