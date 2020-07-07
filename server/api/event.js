const router = require('express').Router()
const {Event, Invitee} = require('../db/models')
const main = require('./nodemailer')
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')
module.exports = router

router.post('/invite', async (req, res, next) => {
  try {
    const newInvitee = await Invitee.create(req.body)
    console.log(
      await Invitee.findAll({
        where: {
          eventId: req.body.eventId
        }
      })
    )
    res.json('HI')
  } catch (err) {
    next(err)
  }
})

// router.get('/invite', async (req, res, next) => {
//   // var name = req.body.name
//   // var email = req.body.email
//   // var message = req.body.message
//   // var content = `name: ${name} \n email: ${email} \n message: ${content} `
//   await main("tavilesa12@gmail.com").catch(console.error)
//   res.json('Message Sent')
// })

// router.put('/sent/invate', (req, res, next) => {
//   try {
//     return transporter.sendMail({
//       to: req.body.email,
//       from: 'eventshare2020@gmail.com',
//       subject: 'Invite to join our Party',
//       html: '<h1>Accept invate right now</h1>'
//     })
//   } catch (err) {
//     next(err)
//   }
// })

router.get('/:id', async (req, res, next) => {
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
