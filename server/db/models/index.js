const userEventRel = require('./userEventRel')
const User = require('./user')
const Task = require('./task')
const Event = require('./event')
const Poll = require('./poll')
const Options = require('./options')
const pollOptions = require('./pollOptions')
const Invitee = require('./invitees')
const Notification = require('./notification')

Task.belongsTo(User)
User.hasMany(Task)

Event.belongsToMany(User, {through: 'users_events'})
User.belongsToMany(Event, {through: 'users_events'})
userEventRel.belongsTo(Event)
Event.hasMany(userEventRel)
userEventRel.belongsTo(User)
User.hasMany(userEventRel)

Task.belongsTo(Event)
Event.hasMany(Task)

Poll.belongsTo(Event)
Poll.belongsTo(User)

Options.belongsTo(Poll)
Poll.belongsToMany(Options, {through: 'poll_options'})

Invitee.belongsTo(Event)
Event.hasMany(Invitee)

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Task,
  Event,
  userEventRel,
  Poll,
  Options,
  pollOptions,
  Invitee,
  Notification
}
