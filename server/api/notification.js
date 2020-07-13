const router = require('express').Router()
const {Task, Notification} = require('../db/models')
module.exports = router

// get allNotificationsByEventId
// router.get('/:id', async (req, res, next) => {
//   try {
//     const allNotificationsById = await Notification.findAll({
//       where: {eventId: req.params.id}
//     })
//     res.json(allNotificationsById)
//   } catch (err) {
//     next(err)
//   }
// })

// get allNotificationsByUser array
router.put('/', async (req, res, next) => {
  try {
    const partiesArray = req.body.userPartiesArray
    let result = []
    let currentResult
    for (let i = 0; i < partiesArray.length; i++) {
      currentResult = await Notification.findAll({
        where: {eventId: partiesArray[i]}
      })
      result = [...result, ...currentResult]
    }
    res.json(result)
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

router.delete('/:id', async (req, res, next) => {
  try {
    const eventToDelete = await Notification.findByPk(req.params.id)
    if (eventToDelete) {
      const isDeleted = await eventToDelete.destroy()
      res.json(isDeleted)
    } else {
      res.status(404)
    }
  } catch (err) {
    next(err)
  }
})
