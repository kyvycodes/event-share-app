import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import user, {getMe} from '../store/user'
/**
 * COMPONENT
 */

export const GuestList = props => {
  useEffect(() => {}, [])
  console.log('PROPSSSs', props)
  const users = props.users || []
  return (
    <div>
      <div>
        <h4>Invited To Event</h4>
      </div>
      <div>
        <h4>Members</h4>
        {users.map(user => {
          if (user.id === props.user.id) {
            return (
              <div key={user.id}>
                <p>{user.firstName}</p>
                <p>Attending? {user.users_events.attending}</p>
                {user.users_events.attending === 'pending' ? (
                  <div>
                    <button>Yes</button>
                    <button>No</button>
                  </div>
                ) : (
                  ''
                )}
              </div>
            )
          } else {
            return (
              <div key={user.id}>
                <p>
                  {user.firstName} {user.lastName}
                </p>
                <p>Attending? {user.users_events.attending}</p>
              </div>
            )
          }
        })}
        <p />
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
    currEvent: state.events.currEvent,
    invitees: state.events.currEvent.invitees,
    users: state.events.currEvent.users
  }
}

const mapDispatch = dispatch => {
  return {}
}

export default connect(mapState, mapDispatch)(GuestList)

/**
 * PROP TYPES
 */
// GuestList.propTypes = {
//   email: PropTypes.string
// }
