const events = [
  {
    title: "Kay's Birthday Party",
    description: 'this is a surprise bday party',
    date: '2020-9-1',
    streetAddress: '5 Hanover Square 11th floor',
    city: 'NY',
    state: 'NY',
    zipcode: 10004,
    startTime: '8:00'
  },
  {
    title: 'WDF REUNION',
    description: "let's celebrate our graduation!",
    date: '2020-8-1',
    streetAddress: '5 Hanover Square 11th floor',
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
    attending: true
  },
  {
    eventId: 1,
    userId: 2,
    isOrganizer: false,
    attending: true
  },
  {
    eventId: 2,
    userId: 1,
    isOrganizer: false,
    attending: true
  }
]

module.exports = {
  events,
  eventUsers
}
