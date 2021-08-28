const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const postSchema = new mongoose.Schema(
  {
    image: String,
    title: String,
    comments: String,
    upvotes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        autopopulate: true,
      },
    ],
    downvotes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        autopopulate: true,
      },
    ],
  },
  { timestamps: true }
)

postSchema.plugin(autopopulate)
module.exports = mongoose.model('Post', postSchema)
