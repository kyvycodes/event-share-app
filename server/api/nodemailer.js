const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')
const cred = require('./config')

// async..await is not allowed in global scope, must use a wrapper
async function main(emails) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport(
    sendgridTransport({
      auth: {
        api_key:
          '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'
      }
    })
  )

  // send mail with defined transport object
  await transporter.sendMail({
    to: emails, // list of receivers
    from: 'eventshare2020@gmail.com', // sender address
    subject: 'Hello ✔', // Subject line
    html: '<b>Hello world?</b>' // html body
  })

  console.log('Message sent')
  // // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}

module.exports = main
