const router = require('express').Router()
const {Event, Invitee, Task, userEventRel} = require('../db/models')
const main = require('./nodemailer')
module.exports = router

router.post('/invite', async (req, res, next) => {
  try {
    const emails = []
    await Promise.all(
      req.body.map(member => {
        const invitee = {
          name: member.name,
          email: member.email,
          eventId: member.eventId
        }
        Invitee.create(invitee)
        emails.push(invitee.email)
      })
    )
    await main(emails, req.user.firstName, req.body.eventId)
    res.json(emails)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const event = await Event.findByPk(req.params.id, {
      include: [Invitee]
    })
    res.json(event)
  } catch (err) {
    next(err)
  }
})

router.post('/add', async (req, res, next) => {
  try {
    const event = {
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode,
      startTime: req.body.startTime
    }
    const newEvent = await Event.create(event)
    newEvent.addUser(req.user.id, {
      through: {isOrganizer: true, attending: 'yes'}
    })
    res.json(newEvent)
  } catch (err) {
    next(err)
  }
})
