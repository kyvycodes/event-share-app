const Sequelize = require('sequelize')
const db = require('../db')

const Task = db.define('tasks', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  category: {
    type: Sequelize.ENUM('to do', 'to bring'),
    allowNull: false
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: 'false'
  },
  dueDate: {
    type: Sequelize.DATE
  }
})
module.exports = Task
