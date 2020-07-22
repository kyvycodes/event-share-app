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
  Answers,
  Post
} = require('../server/db/models')

const {
  events,
  eventUsers,
  usersDummyData,
  userAnswers,
  posts
} = require('../dummyData')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await Promise.all(usersDummyData.map(user => User.create(user)))

  await Promise.all(events.map(event => Event.create(event)))

  await Promise.all(eventUsers.map(rel => userEventRel.create(rel)))

  const polls = await Promise.all([
    Poll.create({
      title: 'What ice cream flavor should we get? 🍦🍦',
      userId: 1,
      // optionId: 1,
      eventId: 1
    }),
    Poll.create({
      title: 'What type of cocktails do you want? 🍹🍹',
      userId: 1,
      // optionId: 1,
      eventId: 1
    }),
    Poll.create({
      title: 'What color-theme clothes should we all wear?',
      userId: 1,
      eventId: 1
    })
  ])

  const options = await Promise.all([
    Options.create({
      title: 'Mint chocolate',
      pollId: 1,
      userId: 1
    }),
    Options.create({
      title: 'Buttered pecan ',
      pollId: 1,
      userId: 2
    }),
    Options.create({
      title: 'Strawberry',
      pollId: 1,
      userId: 5
    }),

    Options.create({
      title: 'Margaritas',
      pollId: 2,
      userId: 1
    }),
    Options.create({
      title: 'Cosmopolitan',
      pollId: 2,
      userId: 2
    }),
    Options.create({
      title: 'Mojito',
      pollId: 2,
      userId: 3
    }),

    Options.create({
      title: 'White',
      pollId: 3,
      userId: 1
    }),
    Options.create({
      title: 'Pastel colors',
      pollId: 3,
      userId: 2
    }),
    Options.create({
      title: 'Pink',
      pollId: 3,
      userId: 3
    })
  ])

  await Promise.all(userAnswers.map(answer => Answers.create(answer)))

  await Promise.all(posts.map(post => Post.create(post)))

  const notificationSuggestions = await Promise.all([
    Notification.create({
      authorId: 13,
      authorName: 'Fila Fb',
      title: 'Music',
      description: 'A cool playlist for the party',
      category: 'to do',
      eventId: 1
    }),
    Notification.create({
      authorId: 14,
      authorName: 'Luis Carbajal',
      title: 'Tres Leches Cake',
      description: 'Bring some Tres Leches Cake',
      category: 'to bring',
      eventId: 1
    }),
    Notification.create({
      authorId: 14,
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
