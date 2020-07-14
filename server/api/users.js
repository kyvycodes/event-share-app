const Sequelize = require('sequelize')
const Op = Sequelize.Op

const router = require('express').Router()
const {User, Event, Task, userEventRel} = require('../db/models')
module.exports = router

router.get('/me', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: ['id', 'email', 'firstName', 'lastName', 'profile_pic'],
      include: [Event, Task, userEventRel]
    })
    res.json(user)
  } catch (err) {
    next(err)
  }
})

router.get('/me/upcoming', async (req, res, next) => {
  try {
    const events = await userEventRel.findAll({
      attributes: ['isOrganizer', 'eventId', 'userId', 'attending'],
      where: {
        userId: req.user.id
      },
      include: [
        {
          model: Event,
          where: {
            date: {
              [Op.gt]: new Date()
            }
          },
          attributes: {exclude: ['createdAt', 'updatedAt']},
          order: ['date', 'DESC']
        }
      ]
    })
    res.json(events)
  } catch (err) {
    next(err)
  }
})

router.get('/me/past', async (req, res, next) => {
  try {
    const events = await userEventRel.findAll({
      attributes: ['isOrganizer', 'eventId', 'userId', 'attending'],
      where: {
        userId: req.user.id
      },
      include: [
        {
          model: Event,
          where: {
            date: {
              [Op.lt]: new Date()
            }
          },
          attributes: {exclude: ['createdAt', 'updatedAt']},
          order: ['date', 'ASC']
        }
      ]
    })
    res.json(events)
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
