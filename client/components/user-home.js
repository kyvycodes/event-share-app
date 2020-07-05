import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
export const UserHome = props => {
  console.log('PROPS', props)
  const {firstName, lastName, email, profile_pic} = props.user
  const events = props.events || []
  const tasks = props.tasks || []

  return (
    <div>
      <div className="profile">
        <img src={profile_pic} />
        <h4>
          {firstName} {lastName}
        </h4>
        <p>{email}</p>
        <Link to="/addEvent">
          <button type="submit">Add Event</button>
        </Link>
      </div>
      <div>
        <h4>Your Events</h4>
        <ul>{events.map(event => <li key={event.id}>{event.title}</li>)}</ul>
        <h4>Your Tasks</h4>
        <ul>{tasks.map(task => <li key={task.id}>{task.title}</li>)}</ul>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user,
    events: state.user.events,
    tasks: state.user.tasks
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
