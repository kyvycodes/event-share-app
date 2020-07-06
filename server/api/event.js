const router = require('express').Router()
const {Event} = require('../db/models')
const main = require('./nodemailer')
module.exports = router

router.get('/invite', async (req, res, next) => {
  // var name = req.body.name
  console.log('HI')
  // var email = req.body.email
  // var message = req.body.message
  // var content = `name: ${name} \n email: ${email} \n message: ${content} `
  await main().catch(console.error)
  res.json('Message Sent')
})

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
