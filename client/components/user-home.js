import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getMe, updateUserEvents} from '../store/user'
import {getAllNotifications} from '../store/notifications'
/**
 * COMPONENT
 */

export const UserHome = props => {
  useEffect(() => {
    props.getUser()
    props.getAllNotifications(1)
  }, [])

  const {firstName, lastName, email, profile_pic} = props.user
  const events = props.user.events || []
  const tasks = props.user.tasks || []
  return (
    <div>
      <div className="profile">
        <img className="profilePic" src={profile_pic} />
        <h4>
          {firstName} {lastName}
        </h4>
        <p>{email}</p>
        <Link to="/events/add">
          <button type="submit">Create Event</button>
        </Link>
      </div>
      <div>
        <h4>Your Events</h4>
        <ul>
          {events.length > 0 ? (
            events.map(event => (
              <div key={event.id}>
                <Link to={`/events/${event.id}`}>
                  <li>{event.title}</li>
                </Link>
                {event.users_events.attending === 'pending' ? (
                  <div>
                    <p>Attending?</p>
                    <button type="button">Yes</button>
                    <button>No</button>
                  </div>
                ) : (
                  <p>Attending: {event.users_events.attending}</p>
                )}
              </div>
            ))
          ) : (
            <p>You Have No Current Events</p>
          )}
        </ul>
        <h4>Your Tasks</h4>
        <ul>
          {tasks.length > 0 ? (
            tasks.map(task => <li key={task.id}>{task.title}</li>)
          ) : (
            <p>You Have No Current Tasks</p>
          )}
        </ul>
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
    tasks: state.user.tasks,
    notifications: state.notifications
  }
}

const mapDispatch = dispatch => {
  return {
    getUser: () => dispatch(getMe()),
    updateUserAttendance: (eventId, decision) =>
      dispatch(updateUserEvents(eventId, decision)),
    getAllNotifications: eventId => dispatch(getAllNotifications(eventId))
  }
}

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
