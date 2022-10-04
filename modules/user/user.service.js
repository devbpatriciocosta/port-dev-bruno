import User from './user.model'

export const nameUser = async (body) => {
  const user = {
    ...body,
    name: body.name
  }
  const dbUser = await User.create(user)
  return dbUser
}
