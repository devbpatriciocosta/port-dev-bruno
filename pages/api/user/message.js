import Joi from 'joi'
import { withIronSessionApiRoute } from 'iron-session/next'
import createHandler from '../../../lib/middlewares/nextConnect'

import validate from '../../../lib/middlewares/validation'

import { nameUser } from '../../../modules/user/user.service'

import { ironConfig } from '../../../lib/middlewares/ironSession'

const postSchema = Joi.object({
  User: Joi.string().required().max(50),
  email: Joi.string().email().required().max(100),
  text: Joi.string().required().max(256)
})

const message = createHandler()

message.post(validate({ body: postSchema }), async (req, res) => {
  try {
    const message = await nameUser(req.body)
    req.session.user = {
      id: message._id,
      User: message.User
    }
    await req.session.save()
    res.send({ ok: true })
  } catch (err) {
    console.error(err)
    throw err
  }
})

export default withIronSessionApiRoute(message, ironConfig)
