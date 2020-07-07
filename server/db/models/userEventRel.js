const Sequelize = require('sequelize')
const db = require('../db')

const userEvent = db.define('users_events', {
  isAdmin: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  isOrganizer: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  attending: {
    type: Sequelize.STRING,
    defaultValue: 'pending',
    validate: {
      isIn: [['yes', 'no', 'pending']]
    }
  }
})

module.exports = userEvent
