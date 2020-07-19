import React from 'react'
import Typography from '@material-ui/core/Typography'
import Typed from 'react-typed'

// import Container from '@material-ui/core/Container';

export const EventShare = () => {
  return (
    /* // <div>
    //   <p>
    //     EventShare can help everyone create a successful event. Our flexible
    //     features encourage multi-person planning teams to manage logistics and
    //     details for events large and small. Our app will put the fun back into
    //     planning for get-togethers, reunions, parties, graduations and
    //     celebrations of all types. EventShare is the best collaborative event
    //     planning tool there is. We want your special occasion to be the best it
    //     can be!
    //   </p>
    // </div> */
    /* <Container >
         <Typography>
          EventShare can help everyone create a successful event. Our flexible
          features encourage multi-person planning teams to manage logistics and
          details for events large and small. Our app will put the fun back into
          planning for get-togethers, reunions, parties, graduations and
          celebrations of all types. EventShare is the best collaborative event
          planning tool there is. We want your special occasion to be the best it
          can be!
   </Typography>

    </Container> */

    <div className="div-why">
      <h1 className="h1-why">Why Event Share ?</h1>
      <br />
      <Typography variant="h5">
        <Typed
          strings={[
            'POLLING',
            'INVITE',
            'CREATE TASKS',
            'RVSP',
            'ADD PICTURES',
            'CHAT'
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
      <br />
      <p className="p-why">
        {' '}
        EventShare can help everyone create a successful event. Our flexible
        features encourage multi-person planning teams to manage logistics and
        details for events large and small. Our app will put the fun back into
        planning for get-togethers, reunions, parties, graduations and
        celebrations of all types. EventShare is the best collaborative event
        planning tool there is. We want your special occasion to be the best it
        can be.
        <a
          target="_blank"
          href="tryit.asp?filename=trycss_text"
          className="a-why"
        >
          Try it Out
        </a>{' '}
        today!
      </p>
    </div>
  )
}
