class Post {
  constructor(image, title) {
    this.image = image
    this.title = title
    this.comments = []
    this.upvotes = []
    this.downvotes = []
  }
}

module.exports = Post
