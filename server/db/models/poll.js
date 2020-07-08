const Sequelize = require('sequelize')
const db = require('../db')

const Poll = db.define('poll', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  items: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  voters: {
    type: Sequelize.ARRAY(Sequelize.INTEGER) // an array of voter id
  },
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
  // creator: {
  //   type: Sequelize.BOOLEAN,
  // },
  showTotal: {
    type: Sequelize.BOOLEAN,
    defaultValue: 'false'
  }
})
module.exports = Poll
