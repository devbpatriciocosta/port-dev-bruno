import connect from 'next-connect'
import Joi from 'joi'

import validate from '../../../lib/middlewares/validation'

import { nameUser } from '../../../modules/user/user.service'

const postSchema = Joi.object({
  Name: Joi.string().required().max(50),
  email: Joi.string().email().required().max(100)
})

const message = connect().post(
  validate({
    body: postSchema
  }),
  (req, res) => {
    nameUser(req.body)
    res.status(200).json({ teste: 'ok' })
  }
)

export default message
