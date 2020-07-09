const router = require('express').Router()
const {Poll} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  console.log('REQ', req.params)
  console.log('poll', Poll.findAll())

  try {
    const tasks = await Poll.findAll({
      order: [['updatedAt']]
    })
    res.json(tasks)
  } catch (err) {
    next(err)
  }
})

// router.get('/:eventId', async (req, res, next) => {
//   // console.log('REQ', req.params)
//   try {
//     const listTask = await Task.findAll({
//       where: {eventId: req.params.eventId},
//       order: [['updatedAt', 'DESC']]
//     })
//     res.json(listTask)
//   } catch (err) {
//     next(err)
//   }
// })

// router.post('/', async (req, res, next) => {
//   try {
//     const newTask = await Task.create(req.body)
//     res.status(201).json(newTask)
//   } catch (error) {
//     next(error)
//   }
// })

// const router = require('express').Router()
// const {Event} = require('../db/models')
// module.exports = router

// router.get('/:id', async (req, res, next) => {
//   console.log('REQ', req.params)
//   try {
//     res.json(await Event.findByPk(req.params.id))
//   } catch (err) {
//     next(err)
//   }
// })

// router.post('/add', async (req, res, next) => {
//   try {
//     const newEvent = await Event.create(req.body)
//     newEvent.addUser(req.user.id, {
//       through: {isOrganizer: true, attending: true}
//     })
//     res.json(newEvent)
//   } catch (err) {
//     next(err)
//   }
// })
