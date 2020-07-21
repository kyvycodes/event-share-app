const usersDummyData = [
  {
    firstName: 'Tatiana',
    lastName: 'Aviles',
    email: 'tatiana@email.com',
    password: '123',
    profile_pic:
      'https://ca.slack-edge.com/T024FPYBQ-U0101NSPMML-4064ef64dd2e-512'
  },
  {
    firstName: 'Kay',
    lastName: 'Hardeman',
    email: 'kay@email.com',
    password: '123',
    profile_pic:
      'https://ca.slack-edge.com/T024FPYBQ-UV3E9BL5P-5f85573b81cb-512'
  },
  {
    firstName: 'David',
    lastName: 'Patlut',
    email: 'david@email.com',
    password: '123',
    profile_pic:
      'https://ca.slack-edge.com/T024FPYBQ-UGCNTHXU5-d3140b6a4643-512'
  },
  {
    firstName: 'Orlando',
    lastName: 'Caraballo',
    email: 'orlando@email.com',
    password: '123',
    profile_pic:
      'https://ca.slack-edge.com/T024FPYBQ-UJFJTU70D-e4faa8567d10-512'
  },
  {
    firstName: 'Oscar',
    lastName: 'Robles',
    email: 'oscar@email.com',
    password: '123',
    profile_pic:
      'https://ca.slack-edge.com/T024FPYBQ-UU56DFVFV-7ee226f8f42c-512'
  },
  {
    firstName: 'Jolie',
    lastName: 'Dudley',
    email: 'jolie@email.com',
    password: '123',
    profile_pic:
      'https://ca.slack-edge.com/T024FPYBQ-UMRL9PW56-a3b5ed7f96c4-512'
  },
  {
    firstName: 'Nes',
    lastName: 'Martinez',
    email: 'nes@email.com',
    password: '123',
    profile_pic:
      'https://ca.slack-edge.com/T024FPYBQ-US5Q9D533-bfd87952a92d-512'
  },
  {
    firstName: 'Manny',
    lastName: 'Garcia',
    email: 'manny@email.com',
    password: '123',
    profile_pic:
      'https://ca.slack-edge.com/T024FPYBQ-US5Q95PMF-90d59bcc11cd-512'
  },
  {
    firstName: 'Erick',
    lastName: 'Canals',
    email: 'erick@email.com',
    password: '123',
    profile_pic:
      'https://ca.slack-edge.com/T024FPYBQ-USJ7DTA3Y-a16953ce3e7e-512'
  },
  {
    firstName: 'Stacey',
    lastName: 'Eliuk',
    email: 'stacey@email.com',
    password: '123',
    profile_pic:
      'https://ca.slack-edge.com/T024FPYBQ-US7DNDV9P-96580593d365-512'
  },
  {
    firstName: 'Julissa',
    lastName: 'Napoletano',
    email: 'julissa@email.com',
    password: '123',
    profile_pic:
      'https://ca.slack-edge.com/T024FPYBQ-UDS7PLF5L-e8f6a0f16cf9-512'
  },
  {
    firstName: 'Murphy',
    lastName: 'Jones',
    email: 'murphy@email.com',
    password: '123',
    profile_pic: 'https://avatars3.githubusercontent.com/u/45020?s=460&v=4'
  },
  {
    firstName: 'Cody',
    lastName: 'Michaels',
    email: 'cody@email.com',
    password: '123',
    profile_pic:
      'https://avatars0.githubusercontent.com/u/1868782?s=460&u=2c72e54e297dc00128739a1207ce9c572bc34d4e&v=4'
  },
  {
    firstName: 'Fila',
    lastName: 'Braz',
    email: 'fila@email.com',
    password: '123',
    profile_pic: 'https://avatars0.githubusercontent.com/u/38737958?s=40&v=4'
  },
  {
    firstName: 'Luis',
    lastName: 'Carbajal',
    email: 'luis@email.com',
    password: '123',
    profile_pic: 'https://avatars0.githubusercontent.com/u/10853211?s=120&v=4'
  },
  {
    firstName: 'Serge Aristide',
    lastName: 'Hardeman',
    email: 'Sergethiti@gmail.com',
    password: '123',
    profile_pic:
      'https://ca.slack-edge.com/T024FPYBQ-UV0NUJTJN-0aed69397b94-512'
  }
]

const events = [
  {
    title: 'WDF Graduation Party',
    description:
      "Let's celebrate the end of our capstone, Champagne on Fullstack!",
    date: '2020-8-1',
    address: '5 Hanover Square 11th floor',
    city: 'NY',
    state: 'NY',
    zipcode: 10004,
    startTime: '6:00'
  },
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
    userId: 2,
    isOrganizer: false,
    attending: 'Attending'
  },
  {
    eventId: 2,
    userId: 3,
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
    attending: 'Attending'
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
    attending: 'Attending'
  },
  {
    eventId: 1,
    userId: 12,
    isOrganizer: false,
    attending: 'Declined'
  },
  {
    eventId: 1,
    userId: 13,
    isOrganizer: false,
    attending: 'Attending'
  },
  {
    eventId: 1,
    userId: 14,
    isOrganizer: false,
    attending: 'Attending'
  },
  {
    eventId: 1,
    userId: 15,
    isOrganizer: false,
    attending: 'Attending'
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
    eventId: 2,
    fileUrl:
      'https://fscomps.fotosearch.com/compc/CSP/CSP399/smiling-man-and-woman-cooking-barbecue-clipart__k53886204.jpg',
    caption: 'So excited for this BBQ!'
  },
  {
    userId: 2,
    eventId: 2,
    fileUrl:
      'https://hips.hearstapps.com/ame-prod-goodhousekeeping-assets.s3.amazonaws.com/main/embedded/46609/gettyimages-475200404.jpg',
    caption: "Who's ready for some BBQ?!"
  },
  {
    userId: 1,
    eventId: 2,
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
