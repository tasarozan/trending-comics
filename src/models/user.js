const Post = require('./post')

class User {
  constructor(username) {
    this.username = username
    this.posts = []
    this.upvotedPosts = []
    this.downvotedPosts = []
  }

  async createPost(image, title) {
    const post = await new Post(image, title)

    this.posts.push(post)

    return post
  }

  upvotePost(post) {
    this.upvotedPosts.push(post)
    post.upvotes.push(this)
  }

  downvotePost(post) {
    this.downvotedPosts.push(post)
    post.downvotes.push(this)
  }
}

module.exports = User
