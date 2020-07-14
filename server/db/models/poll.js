const Sequelize = require('sequelize')
const db = require('../db')

const Poll = db.define('poll', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  closed: {
    type: Sequelize.BOOLEAN,
    defaultValue: 'false'
  },
  dateClosed: {
    type: Sequelize.DATE
  }
})

module.exports = Poll
