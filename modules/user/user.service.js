import User from './user.model'

export const nameUser = async (body) => {
  const user = {
    ...body,
    user: body.user
  }
  const dbUser = await User.create(user)
  return dbUser
}
