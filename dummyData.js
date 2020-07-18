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
  },
  {
    title: 'BBQ Saturday!',
    description: 'For everyone who wants to eat till they drop',
    date: '2020-9-10',
    address: '5 Hanover Square 11th floor',
    city: 'NY',
    state: 'NY',
    zipcode: 10004,
    startTime: '10:00'
  },
  {
    title: 'Fullstack Game Night',
    description: 'Orlando is treating with free alcohol and food',
    date: '2020-9-10',
    address: '5 Hanover Square 11th floor',
    city: 'NY',
    state: 'NY',
    zipcode: 10004,
    startTime: '5:00'
  }
]

const eventUsers = [
  {
    eventId: 1,
    userId: 1,
    isOrganizer: true,
    attending: 'Attending'
  },
  {
    eventId: 1,
    userId: 3,
    isOrganizer: false,
    attending: 'Attending'
  },
  {
    eventId: 2,
    userId: 1,
    isOrganizer: false,
    attending: 'Pending'
  },
  {
    eventId: 1,
    userId: 4,
    isOrganizer: false,
    attending: 'Pending'
  },
  {
    eventId: 1,
    userId: 5,
    isOrganizer: false,
    attending: 'Declined'
  },
  {
    eventId: 1,
    userId: 6,
    isOrganizer: false,
    attending: 'Attending'
  },
  {
    eventId: 1,
    userId: 7,
    isOrganizer: false,
    attending: 'Declined'
  },
  {
    eventId: 1,
    userId: 8,
    isOrganizer: false,
    attending: 'Attending'
  },
  {
    eventId: 1,
    userId: 9,
    isOrganizer: false,
    attending: 'Attending'
  },
  {
    eventId: 1,
    userId: 10,
    isOrganizer: false,
    attending: 'Declined'
  },
  {
    eventId: 1,
    userId: 11,
    isOrganizer: false,
    attending: 'Declined'
  }
]

const userAnswers = [
  {
    optionId: 1,
    userId: 2,
    isOrganizer: false
  }
]

const posts = [
  {
    userId: 3,
    eventId: 1,
    fileUrl:
      'https://fscomps.fotosearch.com/compc/CSP/CSP399/smiling-man-and-woman-cooking-barbecue-clipart__k53886204.jpg',
    caption: 'So excited for this BBQ!'
  },
  {
    userId: 2,
    eventId: 1,
    fileUrl:
      'https://hips.hearstapps.com/ame-prod-goodhousekeeping-assets.s3.amazonaws.com/main/embedded/46609/gettyimages-475200404.jpg',
    caption: "Who's ready for some BBQ?!"
  },
  {
    userId: 1,
    eventId: 1,
    fileUrl:
      'https://image.shutterstock.com/image-photo/family-having-barbecue-party-their-260nw-513989062.jpg',
    caption: 'Idk if I can eat anymore #sleepy'
  }
]

module.exports = {
  events,
  eventUsers,
  usersDummyData,
  userAnswers,
  posts
}
