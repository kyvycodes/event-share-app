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
  }
]

module.exports = {
  events,
  eventUsers
}
