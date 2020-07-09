const Sequelize = require('sequelize')
const db = require('../db')

const Poll = db.define('poll', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  // autoClose: {
  //   type: Sequelize.INTEGER
  // },
  closed: {
    type: Sequelize.BOOLEAN,
    defaultValue: 'false'
  },
  // creator: {
  //   type: Sequelize.BOOLEAN
  // },
  showTotal: {
    type: Sequelize.BOOLEAN,
    defaultValue: 'false'
  }
})

module.exports = Poll
