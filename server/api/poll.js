const router = require('express').Router()
const {Poll, Options, Answers} = require('../db/models')
module.exports = router

const dummyData = {
  title: 'What to do for breakfast',
  options: ['pancakes', 'french Toast', 'burgers'],
  eventId: 1
}

const dummyData2 = {
  userId: 2,
  optionId: 1,
  pollId: 9
}

router.get('/:pollId', async (req, res, next) => {
  try {
    console.log('ISNIDE', req.params)
    const currPoll = await Poll.findByPk(req.params.pollId, {
      include: Options
    })
    res.json(currPoll)
  } catch (err) {
    next(err)
  }
})

router.get('/:eventId/polls', async (req, res, next) => {
  try {
    const polls = await Poll.findAll({
      where: {
        eventId: req.params.eventId
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
      eventid: req.body.eventId
    }

    const newPoll = await Poll.create(poll)

    for (let i = 0; i < req.body.options.length; i++) {
      let title = req.body.options[i]
      let option = await Options.create({title})
      option.setPoll(newPoll.id)
    }
    res.status(201).json(newPoll)
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
