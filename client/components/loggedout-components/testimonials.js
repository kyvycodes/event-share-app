import React from 'react'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'
// import satisfied from "../../../public/satisified.png"
// import { ReactComponent as Satisfied } from "../../../public/satisfied.jpg";

export const Testimonials = () => {
  return (
    <div className="parent-div">
      <div className="container">
        {/* <img src="/w3images/bandmember.jpg" alt="Avatar" style="width:90px"/> */}
        {/* <img src={satisfied} alt="Happy Customer" />; */}
        {/* <Satisfied/> */}
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
          able to track RSVPs and everyone was so excited and appreciated our
          stylish way to keep everything so organized. Now I’m waiting for the
          next great event to plan. Thank you EventShare!!!
        </p>
      </div>

      <div className="container">
        <FormatQuoteIcon style={{color: '#9370DB', fontSize: 60}} />
        {/* <img src="pngegg.png" alt="Avatar" style="width:90px"/> */}
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
