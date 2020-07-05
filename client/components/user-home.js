import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getMe} from '../store/user'
/**
 * COMPONENT
 */
export const UserHome = props => {
  useEffect(() => {
    props.getUser()
  }, [])
  const {firstName, lastName, email, profile_pic} = props.user
  const events = props.user.events || []
  const tasks = props.user.tasks || []
  return (
    <div>
      <div className="profile">
        <img src={profile_pic} />
        <h4>
          {firstName} {lastName}
        </h4>
        <p>{email}</p>
        <Link to="/events/add">
          <button type="submit">Add Event</button>
        </Link>
      </div>
      <div>
        <h4>Your Events</h4>
        <ul>
          {events.map(event => (
            <Link to={`/events/${event.id}`} key={event.id}>
              <li>{event.title}</li>
            </Link>
          ))}
        </ul>
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

const mapDispatch = dispatch => {
  return {
    getUser: () => dispatch(getMe())
  }
}

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
