const router = require('express').Router()
const {Task, Event, User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const tasks = await Task.findAll({
      order: [['updatedAt', 'DESC']]
    })
    res.json(tasks)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const listTask = await Task.findAll({
      where: {eventId: req.params.id},
      order: [['updatedAt', 'DESC']],
      include: {model: User}
    })
    res.json(listTask)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const taskObj = {
      title: req.body.title,
      description: req.body.description,
      category: req.body.category
    }
    const newTask = await Task.create(taskObj)
    const event = await Event.findByPk(req.body.eventId)
    if (event) {
      event.addTask(newTask)
      res.status(201).json(newTask)
    } else {
      res.status(404)
    }
  } catch (error) {
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  console.log('put', Object.keys(Task.prototype))
  console.log('put', Object.keys(User.prototype))

  try {
    const task = await Task.findByPk(req.params.id)
    const userAssigned = await User.findByPk(req.body.userId)
    const type = req.body.type
    if (task && userAssigned) {
      if (type === 'addUserTask') {
        await task.setUser(userAssigned)
      } else {
        await userAssigned.removeTask(req.params.id)
      }

      const listTask = await Task.findAll({
        where: {eventId: req.body.eventId},
        order: [['updatedAt', 'DESC']],
        include: {model: User}
      })
      res.json(listTask)
    } else {
      res.status(404)
    }
  } catch (error) {
    next(error)
  }
})
