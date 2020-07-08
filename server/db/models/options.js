const Sequelize = require('sequelize')
const db = require('../db')

// {
// title: String, // Title of option
// count: Number, // Number of votes
// total: Number, // Number of total votes(including downvote)
// reason: Boolean, // Need to put reason why voted
// reasons: [String], // Array of reasons why voted
// voters: [String/Number] // Array of unique identifers of all voters for this option
// downvoters: [String/Number] // only downvoters
// upvoters: [String/Number] // only upvoters
// adder: String/Number // Unique identifier of the one who added this item(for expandable vote)

const Options = db.define('options', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  count: {
    type: Sequelize.INTEGER
  },
  total: {
    type: Sequelize.INTEGER
  },
  voters: {
    type: Sequelize.ARRAY(Sequelize.INTEGER) // Array of unique identifers of all voters for this option
  }
})
module.exports = Options
