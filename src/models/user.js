const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const Post = require('./post')

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        autopopulate: true,
      },
    ],
    upvotedPosts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        autopopulate: true,
      },
    ],
    downvotedPosts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        autopopulate: true,
      },
    ],
  },
  { timestamps: true }
)
class User {
  async createPost(image, title) {
    const post = await Post.create({ image, title })

    this.posts.push(post)

    await this.save()
  }

  async upvotePost(post) {
    this.upvotedPosts.push(post)
    post.upvotes.push(this)

    await this.save()
    await post.save()
  }

  async downvotePost(post) {
    this.downvotedPosts.push(post)
    post.downvotes.push(this)

    await this.save()
    await post.save()
  }
}

userSchema.loadClass(User)
userSchema.plugin(autopopulate)

module.exports = mongoose.model('User', userSchema)
