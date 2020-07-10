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
    subject: `${userName} has invited you to an event!`, // Subject line
    html: `<div>
    <h4>Hi, ${name}</h4>
    <b>You have been invited to ${userName}'s event! </b>
    <p>Please click the link below, sign in and let ${userName} know if you can make it or not.</p>
    <a href="http://localhost:8080/events/${id}/guests"> Take Me To The Event </a>

    <p>If you don't have an account, please <a href="http://localhost:8080/events/${id}/signup"> sign up here first </a> and then follow the link</p>

    <L
        </div>` // html body
  })

  console.log('Message sent')
}

module.exports = main
