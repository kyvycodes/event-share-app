import React from 'react'
import EventTabs from './EventTabs'
import EventRoutes from './EventRoutes'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

const EventApp = props => {
  return (
    <div>
      <EventTabs />
      <EventRoutes />
    </div>
  )
}

export default EventApp
