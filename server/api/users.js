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
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email', 'event', 'task'],
      include: [Event, Task]
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.put('/me/:eventId', async (req, res, next) => {
  try {
    const userEvent = await userEventRel.findOne({
      where: {
        userId: req.user.id,
        eventId: req.params.eventId
      }
    })
    console.log('REQ BODY', req.body)
    userEvent.attending = req.body.decision
    await userEvent.save()
    console.log('USER', userEvent)
    res.json(
      await userEventRel.findAll({
        where: {
          userId: req.user.id
        }
      })
    )
  } catch (err) {
    next(err)
  }
})
