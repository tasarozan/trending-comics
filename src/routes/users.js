const express = require('express')

const router = express.Router()

const User = require('../models/user')
const Post = require('../models/post')

router.get('/', (req, res) => {
  res.send('heyyy')
})

router.get('/init', async (req, res) => {
  await User.deleteMany()
  await Post.deleteMany()

  const ozan = await User.create({ username: 'ozymaestro' })
  const otherUser = await User.create({ username: 'otherUser' })

  await ozan.createPost('newComic.jpg', 'First Post')
  otherUser.upvotePost(ozan.posts[0])
  const users = [ozan, otherUser]

  res.send(users)
})

module.exports = router
