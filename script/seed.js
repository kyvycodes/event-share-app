'use strict'

const db = require('../server/db')
const {
  User,
  Task,
  Event,
  userEventRel,
  Notification,
  Poll,
  Options,
  Answers
} = require('../server/db/models')
const {
  events,
  eventUsers,
  usersDummyData,
  userAnswers
} = require('../dummyData')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      firstName: 'cody',
      lastName: 'michaels',
      email: 'cody@email.com',
      password: '123',
      profile_pic:
        'https://avatars0.githubusercontent.com/u/1868782?s=460&u=2c72e54e297dc00128739a1207ce9c572bc34d4e&v=4'
    }),
    User.create({
      firstName: 'murphy',
      lastName: 'jones',
      email: 'murphy@email.com',
      password: '123',
      profile_pic: 'https://avatars3.githubusercontent.com/u/45020?s=460&v=4'
    }),
    User.create({
      firstName: 'Fila',
      lastName: 'Braz',
      email: 'fila@email.com',
      password: '123',
      profile_pic: 'https://avatars0.githubusercontent.com/u/38737958?s=40&v=4'
    }),
    User.create({
      firstName: 'Luis',
      lastName: 'Carbajal',
      email: 'Luis@email.com',
      password: '123',
      profile_pic: 'https://avatars0.githubusercontent.com/u/10853211?s=120&v=4'
    })
  ])

  const polls = await Promise.all([
    Poll.create({
      title: 'what should desert be?',
      userId: 1,
      optionId: 1
    }),
    Poll.create({
      title: 'how hard is it to make a poll'
    })
  ])

  const options = await Promise.all([
    Options.create({
      title: 'cake',
      pollId: 1,
      userId: 1
    }),
    Options.create({
      title: 'fruit tart',
      pollId: 1,
      userId: 2
    }),
    Options.create({
      title: 'pie',
      pollId: 1
    })
  ])

  await Promise.all(usersDummyData.map(user => User.create(user)))

  await Promise.all(events.map(event => Event.create(event)))

  await Promise.all(eventUsers.map(rel => userEventRel.create(rel)))

  await Promise.all(userAnswers.map(answer => Answers.create(answer)))

  const notificationSuggestions = await Promise.all([
    Notification.create({
      authorId: 3,
      authorName: 'Fila Fb',
      title: 'Music',
      description: 'Bring some music to play',
      category: 'to bring',
      eventId: 1
    }),
    Notification.create({
      authorId: 4,
      authorName: 'Luis Carbajal',
      title: '3 Milk Cake',
      description: 'Bring some 3 Milk Cake',
      category: 'to bring',
      eventId: 1
    }),
    Notification.create({
      authorId: 4,
      authorName: 'Luis Carbajal',
      title: 'Margaritas',
      description: 'Some margaritas sounds great',
      category: 'to bring',
      eventId: 1
    })
  ])

  const tasks = await Promise.all([
    Task.create({
      title: 'Beers',
      description: 'We need at least 20 beers',
      category: 'to bring',
      eventId: 1
    }),
    Task.create({
      title: 'Hot dogs',
      description: '10 packs of hot dogs',
      category: 'to bring',
      eventId: 1
    }),
    Task.create({
      title: 'Chips & Salsa ',
      description: '2 packages of chips&salsa',
      category: 'to bring',
      eventId: 1
    }),

    Task.create({
      title: 'Clean up',
      description: 'Clean up after the party is over',
      category: 'to do',
      eventId: 1
    }),
    Task.create({
      title: 'Decorate',
      description: 'Help us to decorate our place before the the party starts',
      category: 'to do',
      eventId: 1
    }),
    Task.create({
      title: 'Food Prep',
      description: 'Help us to prep food before the the party starts',
      category: 'to do',
      eventId: 1
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${tasks.length} tasks`)
  console.log(`seeded ${notificationSuggestions.length} suggestions`)
  console.log(`seeded ${polls.length} tasks`)
  console.log(`seeded ${options.length} tasks`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
