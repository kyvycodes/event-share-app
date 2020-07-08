import React from 'react'
import EventTabs from './EventTabs'
import EventRoutes from './EventRoutes'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

const EventApp = props => {
  console.log('EVENTAPP', props)
  return (
    <div>
      <EventTabs />
      <EventRoutes id={props.match.params.id} />
    </div>
  )
}

const mapState = (state, ownProps) => {
  return {
    eventId: 2
  }
}

export default withRouter(connect(mapState)(EventApp))
