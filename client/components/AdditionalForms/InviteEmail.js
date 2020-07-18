const html = require('html-template-tag')

module.exports = (invitedName, userName, eventId) => html`
<div>
<h4>Hi ${invitedName}, You have been invited to ${userName}'s event!!</h4>

<p>Please follow the steps below:
<ol>
<li>Click the link below </li>
<li>Log in or Sign up with the same email where you received this message</li>
<li> After logging in or signing up, you'll be directed towards the event, where you can RSVP. </li>

</ol>

<a href="https://event-share.herokuapp.com/events/${eventId}/guests"> Click Here To Go To The Event! </a>

<p>You can also help ${userName} organize the event via our dashboard!</p>

</div>
`
