const Sequelize = require('sequelize')
const db = require('../db')

const PhotoComment = db.define('photoComment', {
  comment: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = PhotoComment
