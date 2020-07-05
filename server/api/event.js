const router = require('express').Router()
const {Event} = require('../db/models')
module.exports = router

router.get('/:id', async (req, res, next) => {
  console.log('REQ', req.params)
  try {
    res.json(await Event.findByPk(req.params.id))
  } catch (err) {
    next(err)
  }
})

router.post('/add', async (req, res, next) => {
  try {
    const newEvent = await Event.create(req.body)
    newEvent.addUser(req.user.id, {
      through: {isOrganizer: true, attending: true}
    })
    res.json(newEvent)
  } catch (err) {
    next(err)
  }
})
