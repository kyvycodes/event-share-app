const router = require('express').Router()
const {Poll, Options} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  // console.log('REQ', req.params)
  // console.log('poll', Options.findAll())
  try {
    const answers = await Options.findAll({
      where: {pollId: req.params.pollId}
    })
    res.json(answers)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newPoll = await Poll.create(req.body)
    res.status(201).json(newPoll)
  } catch (error) {
    next(error)
  }
})
