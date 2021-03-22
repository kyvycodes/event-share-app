const router = require('express').Router()
const {Poll, Options, Answers, User, Event} = require('../db/models')
const main = require('./nodemailer')
const PollEmail = require('../../client/components/AdditionalForms/PollEmail')

module.exports = router

router.get('/:eventId', async (req, res, next) => {
  try {
    const polls = await Poll.findAll({
      where: {eventId: req.params.eventId},
      order: [['updatedAt', 'DESC']],
      include: {
        model: Options,
        include: {
          model: Answers
        }
      }
    })
    res.json(polls)
  } catch (err) {
    next(err)
  }
})

router.post('/create', async (req, res, next) => {
  try {
    const poll = {
      title: req.body.title,
      userId: req.user.id,
      eventId: req.body.eventId
    }

    const newPoll = await Poll.create(poll)

    for (let i = 0; i < req.body.options.length; i++) {
      let title = req.body.options[i]
      let option = await Options.create({title})
      option.setPoll(newPoll.id)
    }

    const currEvent = await Event.findByPk(req.body.eventId)
    const guests = await currEvent.getUsers({
      attributes: ['firstName', 'email']
    })
    res.status(201).json(newPoll)
  } catch (error) {
    next(error)
  }
})

router.post('/create/vote', async (req, res, next) => {
  try {
    const answerObj = {
      optionId: req.body.optionId,
      userId: req.body.userId,
      pollId: req.body.pollId
    }

    await Answers.create(answerObj)
    const polls = await Poll.findAll({
      where: {eventId: req.body.eventId},
      order: [['updatedAt', 'DESC']],
      include: {
        model: Options,
        include: {
          model: Answers
        }
      }
    })
    res.status(201).json(polls)
  } catch (error) {
    next(error)
  }
})

router.put('/:pollId', async (req, res, next) => {
  try {
    const answer = {
      optionId: 1,
      userId: 1
    }
    const newAnswer = await Answers.create(answer)
    //to be finished
    res.status(201).json(newAnswer)
  } catch (error) {
    next(error)
  }
})
