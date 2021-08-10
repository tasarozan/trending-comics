const express = require('express')
const router = express.Router()

const User = require('../models/user')

const ozan = new User('ozymaestro')
const otherUser = new User('otherUser')

ozan.createPost('newComic.jpg', 'First Post')
// otherUser.upvotePost(ozan.posts[0])
const users = [ozan, otherUser]

router.get('/', (req, res) => {
  res.send(users)
})

module.exports = router
