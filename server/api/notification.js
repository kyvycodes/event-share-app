/*
2. choose task will change to display name picture
3. if task is take & u are the persondisplay a btn that says drop task. Should go back to green &  choose task
1. approve or reject  suggested taks
*/

const router = require('express').Router()
const {Task} = require('../db/models')
module.exports = router

const Notification = require('../../models/Notification')

// fetch all notification
router.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
  Notification.find({userID: req.user.id, read: false})
    .countDocuments()
    .then(count => {
      Notification.find({userID: req.user.id})
        .sort('-date')
        .then(notification => {
          res.json({
            notification: notification,
            unread: count
          })
        })
        .catch(err =>
          res
            .status(404)
            .json({error: 'Error in get api/notification/. ' + err})
        )
    })
})

// set notification read to true
router.put(
  '/check',
  passport.authenticate('jwt', {session: false}),
  (req, res) => {
    Notification.updateMany(
      {userID: req.user.id, read: false},
      {read: true}
    ).catch(err =>
      res
        .status(404)
        .json({error: 'Error in get api/notification/check. ' + err})
    )
  }
)

// delete a notification
router.delete(
  '/:id',
  passport.authenticate('jwt', {session: false}),
  (req, res) => {
    Notification.findById(req.params.id)
      .then(notification => {
        if (!notification) {
          return res.status(404).json({error: 'This notification is not found'})
        }
        notification.remove().then(() => res.json({success: true}))
      })
      .catch(err =>
        res.status(404).json({error: 'Error in get api/notification/. ' + err})
      )
  }
)

module.exports = router
