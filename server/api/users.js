const router = require('express').Router()
const {User, Event, Task, userEventRel} = require('../db/models')
module.exports = router

router.get('/me', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: ['id', 'email', 'firstName', 'lastName', 'profile_pic'],
      include: [Event, Task]
    })
    res.json(user)
  } catch (err) {
    next(err)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'email', 'event', 'task'],
      include: [Event, Task]
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})
