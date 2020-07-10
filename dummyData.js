const usersDummyData = [
  {
    firstName: 'Kay',
    lastName: 'Hardeman',
    email: 'kay@email.com',
    password: '123'
  },
  {
    firstName: 'Serge',
    lastName: 'Aristide',
    email: 'serge@email.com',
    password: '123'
  },
  {
    firstName: 'David',
    lastName: 'Patlut',
    email: 'david@email.com',
    password: '123'
  },
  {
    firstName: 'Orlando',
    lastName: 'Caraballo',
    email: 'orlando@email.com',
    password: '123'
  },
  {
    firstName: 'Oscar',
    lastName: 'Robles',
    email: 'oscar@email.com',
    password: '123'
  },
  {
    firstName: 'Britney',
    lastName: 'Spears',
    email: 'britney@email.com',
    password: '123'
  },
  {
    firstName: 'Christina',
    lastName: 'Aguilera',
    email: 'christina@email.com',
    password: '123'
  }
]

const events = [
  {
    title: "Kay's Birthday Party",
    description: 'this is a surprise bday party',
    date: '2020-9-1',
    address: '5 Hanover Square 11th floor',
    city: 'NY',
    state: 'NY',
    zipcode: 10004,
    startTime: '8:00'
  },
  {
    title: 'WDF REUNION',
    description: "let's celebrate our graduation!",
    date: '2020-8-1',
    address: '5 Hanover Square 11th floor',
    city: 'NY',
    state: 'NY',
    zipcode: 10004,
    startTime: '6:00'
  },
  {
    title: 'FSA PARTY',
    description: 'Paid by Fullstack',
    date: '2020-8-20',
    address: '5 Hanover Square 11th floor',
    city: 'NY',
    state: 'NY',
    zipcode: 10004,
    startTime: '9:00'
  }
]

const eventUsers = [
  {
    eventId: 1,
    userId: 1,
    isOrganizer: true,
    attending: 'yes'
  },
  {
    eventId: 1,
    userId: 3,
    isOrganizer: false,
    attending: 'yes'
  },
  {
    eventId: 2,
    userId: 1,
    isOrganizer: false,
    attending: 'pending'
  },
  {
    eventId: 1,
    userId: 4,
    isOrganizer: false,
    attending: 'pending'
  },
  {
    eventId: 1,
    userId: 5,
    isOrganizer: false,
    attending: 'pending'
  },
  {
    eventId: 1,
    userId: 6,
    isOrganizer: false,
    attending: 'yes'
  },
  {
    eventId: 1,
    userId: 7,
    isOrganizer: false,
    attending: 'pending'
  },
  {
    eventId: 1,
    userId: 8,
    isOrganizer: true,
    attending: 'yes'
  },
  {
    eventId: 1,
    userId: 9,
    isOrganizer: true,
    attending: 'yes'
  },
  {
    eventId: 1,
    userId: 10,
    isOrganizer: true,
    attending: 'yes'
  },
  {
    eventId: 1,
    userId: 11,
    isOrganizer: true,
    attending: 'yes'
  }
]

module.exports = {
  events,
  eventUsers,
  usersDummyData
}
