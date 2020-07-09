const Sequelize = require('sequelize')
const db = require('../db')

const Event = db.define('events', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
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
      len: [5]
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
  },
  invited: {
    type: Sequelize.INTEGER
  },
  attending: {
    type: Sequelize.INTEGER
  },
  declined: {
    type: Sequelize.INTEGER
  }
})

module.exports = Event
