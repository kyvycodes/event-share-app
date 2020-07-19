import React from 'react'
import Typography from '@material-ui/core/Typography'
import Typed from 'react-typed'

export const EventShare = () => {
  return (
    <div className="div-why">
      <h1 className="h1-why">Why Event Share ?</h1>
      <br />
      <Typography variant="h5" className="typed-why">
        <Typed
          strings={[
            'POLLING',
            'INVITE',
            'CREATE TASKS',
            'RVSP',
            'ADD TO CALENDAR',
            'GET DIRECTIONS',
            'ADD PICTURES',
            'CHAT🎉'
          ]}
          style={{color: '#FF5757'}}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
      <br />
      <p className="p-why">
        {' '}
        EventShare can help everyone create a successful event. Our flexible
        features encourage hosts to recruit multi-person planning teams to
        manage logistics and details for events large and small. Our app will
        put the fun back into planning for get-togethers, reunions, parties,
        graduations and celebrations of all types. EventShare is the best
        collaborative event planning tool there is. We want your special
        occasion to be the best it can be.
        <a href="/signup" className="a-why">
          {' '}
          Try it Out
        </a>{' '}
        today!
      </p>
    </div>
  )
}
