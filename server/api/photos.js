const Sequelize = require('sequelize')
const Op = Sequelize.Op
const router = require('express').Router()
const {User, Post, PhotoComment} = require('../db/models')
const cloudinary = require('cloudinary').v2

if (process.env.NODE_ENV !== 'production') require('../../apiKey')

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

module.exports = router

router.get('/:eventId', async (req, res, next) => {
  try {
    const allPosts = await Post.findAll({
      where: {
        eventId: req.params.eventId
      },
      order: [['createdAt', 'DESC']],
      include: [{model: PhotoComment, include: [User]}, User]
    })
    console.log(allPosts)

    res.json(allPosts)
  } catch (err) {
    next(err)
  }
})

router.post('/upload/:eventId', async (req, res, next) => {
  try {
    const id = req.params.eventId
    const result = await cloudinary.uploader.upload(req.body.fileUpload, {
      upload_presets: `event-share`
    })
    console.log('result', result)

    const postToCreate = {
      fileUrl: result.url,
      caption: req.body.caption,
      eventId: req.params.eventId,
      userId: req.user.id
    }

    await Post.create(postToCreate)

    const allPosts = await Post.findAll({
      where: {
        eventId: req.params.eventId
      },
      order: [['createdAt', 'DESC']],
      include: [{model: PhotoComment, include: [User]}, User]
    })

    res.json(allPosts)
  } catch (err) {
    next(err)
  }
})

router.post('/:postId/comments', async (req, res, next) => {
  try {
    console.log('REQ', req.body)

    const comment = await PhotoComment.create({
      comment: req.body.comment,
      userId: req.user.id,
      postId: req.params.postId
    })

    const allPosts = await Post.findAll({
      where: {
        eventId: req.body.eventId
      },
      order: [['createdAt', 'DESC']],
      include: [{model: PhotoComment, include: [User]}, User]
    })

    res.json(allPosts)
  } catch (err) {
    next(err)
  }
})
