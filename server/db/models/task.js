const Sequelize = require('sequelize')
const db = require('../db')

const Task = db.define('tasks', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
    validate: {
      len: {
        args: [3, 100],
        msg: 'Title must be at least 3 characters & less than 100'
      }
    }
  },
  description: {
    type: Sequelize.TEXT
  },
  category: {
    type: Sequelize.ENUM('to do', 'to bring'),
    allowNull: false,
    validate: {
      len: {args: [3, 100], msg: 'Category is required'}
    }
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
