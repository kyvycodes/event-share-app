const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')

if (process.env.NODE_ENV !== 'production') require('../../apiKey')

async function main(emails, name, id) {
  const transporter = nodemailer.createTransport(
    sendgridTransport({
      auth: {
        api_key: process.env.NODE_MAILER_KEY
      }
    })
  )

  await transporter.sendMail({
    to: 'recipient-eventshare2020@gmail.com',
    bcc: emails, // list of receivers
    from: 'eventshare2020@gmail.com', // sender address
    subject: `${name} has invited you to join an event!`, // Subject line
    html: `<div>
    <b>You have been invited to join ${name}'s event, please click on the link below to join </b>
    <p>http://localhost:8080/events/${id}</p>
        </div>` // html body
  })

  console.log('Message sent')
}

module.exports = main
