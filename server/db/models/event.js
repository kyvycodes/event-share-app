const Sequelize = require('sequelize')
const db = require('../db')

const Event = db.define('events', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {arg: true, msg: 'Title must be filled'},
      len: {
        arg: [3, 100],
        msg: 'Title must be at least 3 characters & less than 100'
      }
    }
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: {arg: true, msg: 'Description must be filled'}
    }
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  zipcode: {
    type: Sequelize.INTEGER,
    validate: {
      len: {args: [5], msg: 'Zipcode must be five digits long'}
    }
  },
  startTime: {
    type: Sequelize.TIME
  },
  invitationLink: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  }
})

module.exports = Event
