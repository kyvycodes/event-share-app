const router = require('express').Router()
const {Event, Invitee} = require('../db/models')
const main = require('./nodemailer')
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')
module.exports = router

router.post('/invite', async (req, res, next) => {
  try {
    const emails = []
    await Promise.all(
      req.body.invitees.map(member => {
        Invitee.create(member)
        emails.push(member.email)
      })
    )
    // await main(emails, req.body.user)
    res.json(emails)
  } catch (err) {
    next(err)
  }
})

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
