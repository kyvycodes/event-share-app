// /* global describe beforeEach it */

// const {expect} = require('chai')
// const request = require('supertest')
// const db = require('../db')
// const app = require('../index')
// const { agent } = require('supertest')
// const Tasks = db.model('tasks')

// describe('Tasks routes', () => {
//   beforeEach(() => {
//     return db.sync({force: true})
//   })

//   describe('/api/tasks/', () => {
//     const taskTitle = 'cooking meals'
//     const tasktCategory = 'to bring'

//     beforeEach(() => {
//       return Tasks.create({
//         title: taskTitle,
//         category: tasktCategory
//       })
//     })

//     it('GET /api/tasks', async () => {
//       const res = await request(app)
//         .get('/api/tasks')
//         .expect(200)

//       expect(res.body).to.be.an('array')
//       expect(res.body[0].title).to.be.equal(taskTitle)
//     })
//   })

//   describe('/api/tasks/:id', () => {
//       let eventTask;
//       beforeEach(async()=> {
//           const creatingtasks = [
//               {title: "cleaning", category: "to do"},
//               {title: "lifting", category: "to do"},
//               {title: "droping", category: "to do"}
//           ].map(data => Tasks.create(data));
//         const createdtasks = await Promise.all(creatingtasks)
//         eventTask = creatingtasks[1]
//       })
//       it('return the task based on event id', async ()=> {
//           const res = await request(app)
//           .get('/tasks/' + eventTask.id)
//           .expect(200)
//           expect(res.body[0].title).to.equal('lifting')
//       })
//       it('returns a 404 error if id is not correct', () => {
//           return request(app)
//           .get('/tasks/5536477')
//           .expect(404);
//       })
//   })
// })
