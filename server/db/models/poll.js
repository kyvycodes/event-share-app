const Sequelize = require('sequelize')
const db = require('../db')
const {STRING} = require('sequelize')

const Poll = db.define('poll', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  // item: {
  //   type: Sequelize.ARRAY(STRING)
  // },
  autoClose: {
    type: Sequelize.INTEGER
  },
  expansion: {
    type: Sequelize.BOOLEAN,
    defaultValue: 'false'
  },
  closed: {
    type: Sequelize.BOOLEAN,
    defaultValue: 'false'
  },
  creator: {
    type: Sequelize.BOOLEAN
  },
  showTotal: {
    type: Sequelize.BOOLEAN,
    defaultValue: 'false'
  }
})

module.exports = Poll
