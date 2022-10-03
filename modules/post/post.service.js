import Post from './post.model'

export const createPost = async (body, user) => {
  return await Post.create({
    text: body.text,
    createdDate: new Date(),
    createdBy: user.id
  })
}

export const getPosts = async (Limit = 10) => {
  return await Post.find()
}
