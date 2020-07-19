import React from 'react'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'

export const Testimonials = () => {
  return (
    <div className="parent-div">
      <div className="container">
        <div>
          <img
            height="150px"
            width="150px"
            text-align="center"
            src="/client.png"
            alt="Kay"
          />
        </div>

        <FormatQuoteIcon style={{color: '#9370DB', fontSize: 60}} />
        <p>
          <span> - Raji Allen</span>
        </p>
        <p className="texttt">
          {' '}
          I used EventShare to plan my daughter’s graduation party and the event
          was perfect! I was able to set up tasks for her friends to bring
          special goodies and treats. Her sister created a poll to decide a
          themed dress code for all the guests. All through this app! We were
          able to track RSVP's and everyone was so excited and appreciated our
          stylish way to keep everything so organized. Now I’m waiting for the
          next great event to plan. Thank you EventShare!!!
        </p>
      </div>

      <div className="container">
        <div>
          <img
            height="150px"
            width="150px"
            text-align="center"
            src="/client.png"
            alt="Kay"
          />
        </div>
        <FormatQuoteIcon style={{color: '#9370DB', fontSize: 60}} />
        <p>
          <span> - Janiece Regina</span>
        </p>
        <p className="text-div">
          {' '}
          With ease and simplicity, EventShare is an excellent app to use for
          all your event needs. Great for both the planner and the invitee!
          Would definitely recommend to my friends and family!{' '}
        </p>
      </div>
    </div>
  )
}
