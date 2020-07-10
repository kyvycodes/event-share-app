const Sequelize = require('sequelize')
const db = require('../db')

const pollOptions = db.define('poll_options', {
  isAdmin: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
})

module.exports = pollOptions
