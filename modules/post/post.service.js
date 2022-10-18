import Post from './post.model'

export const createPost = async (body, user) => {
  return await Post.create({
    text: body.text,
    createdDate: new Date(),
    createdBy: user.id
  })
}

export const getPosts = async (limit = 50) => {
  return await Post.find().populate('createdBy', 'user').sort({ createdData: -1 }).limit(limit)
}
