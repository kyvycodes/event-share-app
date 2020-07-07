const Sequelize = require('sequelize')
const db = require('../db')

const Invitee = db.define('invitees', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
    unique: true,
    validate: {
      isEmail: true
    }
  }
})
module.exports = Invitee
