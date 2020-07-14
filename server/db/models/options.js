const Sequelize = require('sequelize')
const db = require('../db')

const Options = db.define('options', {
  title: {
    type: Sequelize.STRING
  }
})

module.exports = Options
