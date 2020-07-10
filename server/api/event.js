const router = require('express').Router()
const {Event, Invitee, Task, User, userEventRel} = require('../db/models')
const main = require('./nodemailer')
module.exports = router

router.get('/:id', async (req, res, next) => {
  try {
    const event = await Event.findOne({
      where: {id: req.params.id},
      include: [Invitee, User, Task]
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

router.post('/invite', async (req, res, next) => {
  try {
    const emails = []
    await Promise.all(
      req.body.map(async member => {
        const isUser = await User.findOne({
          where: {
            email: member.email
          }
        })
        if (!isUser) {
          const invitee = {
            name: member.name,
            email: member.email,
            eventId: member.eventId
          }
          Invitee.create(invitee)
        } else {
          isUser.addEvent(member.eventId)
        }
        await main(
          member.email,
          member.name,
          req.user.firstName,
          member.eventId
        )

        emails.push(member)
      })
    )
    res.json(emails)
  } catch (err) {
    next(err)
  }
})
router.put('/:eventId/checkforEmail', async (req, res, next) => {
  try {
    console.log('REQ', req.body)
    const nonMembersCheck = Invitee.findOne({
      where: {
        email: req.body.email
      }
    })

    const membersCheck = User.findOne({
      where: {
        email: req.body.email
      }
    })
    if (nonMembersCheck || membersCheck) {
      res.json('This email has already been invited, please add others')
    } else {
      res.end()
    }
  } catch (err) {
    next(err)
  }
})

router.put('/:eventId/updateUser', async (req, res, next) => {
  try {
    console.log('req', req.params.eventId)
    const userEvent = await userEventRel.findOne({
      where: {
        userId: req.user.id,
        eventId: req.params.eventId
      }
    })
    userEvent.attending = req.body.decision
    await userEvent.save()
    const currEvent = await Event.findByPk(req.params.eventId, {
      include: [User, Invitee]
    })
    console.log('USER', userEvent, 'EVENT', currEvent)
    res.json(currEvent)
  } catch (err) {
    next(err)
  }
})
