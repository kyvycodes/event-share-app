const router = require('express').Router()
const {Task, Event} = require('../db/models')
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

router.get('/:eventId', async (req, res, next) => {
  try {
    const listTask = await Task.findAll({
      where: {eventId: req.params.eventId},
      order: [['updatedAt', 'DESC']]
    })
    res.json(listTask)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    console.log('OUTPUT: try', Object.keys(Event.prototype))

    const taskObj = {
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      userId: 3
    }
    const newTask = await Task.create(taskObj)
    const event = await Event.findByPk(1)
    event.addTask(newTask)
    res.status(201).json(newTask)
  } catch (error) {
    next(error)
  }
})
