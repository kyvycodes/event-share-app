const Sequelize = require('sequelize')
const db = require('../db')

const answers = db.define('answers', {
  isOrganizer: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  }
})

module.exports = answers
