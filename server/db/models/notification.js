const Sequelize = require('sequelize')
const db = require('../db')

const Notification = db.define('notifications', {
  authorId: {
    type: Sequelize.INTEGER
  },
  authorName: {
    type: Sequelize.STRING
  },
  eventId: {
    type: Sequelize.INTEGER
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
    validate: {
      len: {
        args: [3, 100],
        msg: 'Title must be at least 3 characters & less than 100'
      }
    }
  },
  description: {
    type: Sequelize.TEXT
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Date.now
  },
  read: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  category: {
    type: Sequelize.ENUM('to bring', 'to do'),
    allowNull: false,
    validate: {
      len: {args: [3, 100], msg: 'Type notification is required'}
    }
  }
})

module.exports = Notification
