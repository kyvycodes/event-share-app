const Sequelize = require('sequelize')
const db = require('../db')

// association we need  userID
const Notification = db.define('notifications', {
  authorId: {
    type: Sequelize.STRING
  },
  authorName: {
    type: Sequelize.STRING
  },
  text: {
    type: Sequelize.STRING
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Date.now
  },
  read: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})
module.exports = Notification
