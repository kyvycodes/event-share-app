const router = require('express').Router()
const {Task} = require('../db/models')
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
    const newTask = await Task.create(req.body)
    res.status(201).json(newTask)
  } catch (error) {
    next(error)
  }
})
