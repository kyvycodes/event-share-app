const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')

if (process.env.NODE_ENV !== 'production') require('../../apiKey')

// async..await is not allowed in global scope, must use a wrapper
async function main(emails, name) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport(
    sendgridTransport({
      auth: {
        api_key: process.env.NODE_MAILER_KEY
      }
    })
  )

  // send mail with defined transport object
  await transporter.sendMail({
    to: 'recipient-eventshare2020@gmail.com',
    bcc: emails, // list of receivers
    from: 'eventshare2020@gmail.com', // sender address
    subject: `${name} has invited you to join an event!`, // Subject line
    html: `<div>
    <b>You have been invited to join ${name}'s event, please click on the link below to join </b>
    <p> LINK WILL BE HERE </p>
    </div>` // html body
  })

  console.log('Message sent')
  return true
  // // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

module.exports = main
