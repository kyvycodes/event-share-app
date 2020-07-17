const Sequelize = require('sequelize')
const db = require('../db')

const Post = db.define('post', {
  fileUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  caption: {
    type: Sequelize.STRING
  }
})

module.exports = Post
