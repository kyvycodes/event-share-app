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

//under construction
router.post('/', async (req, res, next) => {
  try {
    const newPoll = await Poll.create(req.body)
    res.status(201).json(newPoll)
  } catch (error) {
    next(error)
  }
})
