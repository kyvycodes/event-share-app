const Sequelize = require('sequelize')
const Op = Sequelize.Op
const router = require('express').Router()
const {Event, Invitee, Task, User, userEventRel, Post} = require('../db/models')

module.exports = router

router.post('/upload/:eventId', async (req, res, next) => {
  try {
    const url = 'LOL' //API to store it in cloud and get url

    const postToCreate = {
      url: url,
      caption: req.body.caption,
      eventId: req.params.id,
      userId: req.user.id
    }

    const post = await Post.create(postToCreate)

    const allPosts = await Post.findAll({
      where: {
        eventId: req.params.id
      }
    })

    res.json(allPosts)
  } catch (err) {
    next(err)
  }
})
