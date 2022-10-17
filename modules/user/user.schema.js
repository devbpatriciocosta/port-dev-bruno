import Joi from 'joi'

export const createUserSchema = Joi.object({
  Name: Joi.string().required().max(256)
})
