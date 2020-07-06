const router = require('express').Router()
const {Event} = require('../db/models')
const sendgridTransport = require('nodemailer-sendgrid-transport')
const nodemailer = require('nodemailer')
const SEND_GRID = require('../api_keys')
module.exports = router

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: SEND_GRID
    }
  })
)

router.put('/sent/invate', (req, res, next) => {
  try {
    return transporter.sendMail({
      to: req.body.email,
      from: 'eventshare2020@gmail.com',
      subject: 'Invite to join our Party',
      html: '<h1>Accept invate right now</h1>'
    })
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  console.log('OUTPUT: SEN', SEN)
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
