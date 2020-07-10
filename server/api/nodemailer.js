const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')

if (process.env.NODE_ENV !== 'production') require('../../apiKey')

async function main(email, name, userName, id) {
  const transporter = nodemailer.createTransport(
    sendgridTransport({
      auth: {
        api_key: process.env.NODE_MAILER_KEY
      }
    })
  )

  await transporter.sendMail({
    to: email,
    from: 'eventshare2020@gmail.com', // sender address
    subject: `${userName} has invited you to an event!`,
    html: `<div>
    <h4>Hi, ${name}</h4>
    <b>You have been invited to ${userName}'s event! </b>
    <p>Please click the link below, sign in and let ${userName} know if you can make it or not.</p>
    <p>You can also help ${userName} organize via our dashboard!</p>
    <a href="https://event-share.herokuapp.com/events/${id}/guests"> Take Me To The Event </a>

        </div>` // html body
  })

  console.log('Message sent')
}

module.exports = main
