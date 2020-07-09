/*
GOAL: approve or reject  suggested taks
1. add a field called isApproved to task model
2.when create a task
      if(userIsAdmin) {
        create Task and set  isApproved = true
      }
      else {
        create Task and set  isApproved = false
      }
3. make sure to only server the   isApproved = true for taskList & for notifications serve up only tasks that  isApproved = false
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
