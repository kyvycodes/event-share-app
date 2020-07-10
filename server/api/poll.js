const router = require('express').Router()
const {Poll, Options} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
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
    // const optionOne = await Options.create(req.body.optionOne)
    // const optionTwo = await Options.create(req.body.optionTwo)
    // const optionThree = await Options.create(req.body.optionThree)
    // console.log(optionOne.__proto__)
    res.status(201).json(newPoll)
  } catch (error) {
    next(error)
  }
})
