const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/events', require('./event'))
router.use('/poll', require('./poll'))
router.use('/tasks', require('./task'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
