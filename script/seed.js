'use strict'

const db = require('../server/db')
const {User, Task, Event, userEventRel} = require('../server/db/models')
const {events, eventUsers} = require('../dummyData')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      firstName: 'cody',
      lastName: 'michaels',
      email: 'cody@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'murphy',
      lastName: 'jones',
      email: 'murphy@email.com',
      password: '123'
    })
  ])

  await Promise.all(events.map(event => Event.create(event)))

  await Promise.all(eventUsers.map(rel => userEventRel.create(rel)))

  const tasks = await Promise.all([
    Task.create({
      title: 'Bring beers',
      description: 'We need at least 20 beers',
      category: 'to bring',
      userId: 2,
      eventId: 1
    }),
    Task.create({
      title: 'Bring hot dogs',
      description: '10 packs of hot dogs',
      category: 'to bring',
      userId: 1,
      eventId: 1
    }),
    Task.create({
      title: 'Clean up',
      description: 'Clean up after the party is over',
      category: 'to do',
      userId: 1,
      eventId: 2
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${tasks.length} tasks`)
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
