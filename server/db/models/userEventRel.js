const Sequelize = require('sequelize')
const db = require('../db')

const userEvent = db.define('users_events', {
  isOrganizer: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  attending: {
    type: Sequelize.STRING,
    defaultValue: 'Pending',
    validate: {
      isIn: [['Attending', 'Declined', 'Pending']]
    }
  }
})

module.exports = userEvent
