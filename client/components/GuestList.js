import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getMe} from '../store/user'
/**
 * COMPONENT
 */

export const GuestList = props => {
  useEffect(() => {}, [])
  console.log('PROPS IN GUESTS', props)
  const invitees = props.invitees || []
  return (
    <div>
      <div>
        <h4>Invited To Event</h4>
        <button type="submit">Attending</button>
        <button type="submit">Declined</button>
      </div>
      <div>
        <h4>Guests</h4>
        <li />
        {invitees.length > 0 ? (
          invitees.map(guest => (
            <ul key={guest.id}>
              <li>
                {guest.name} - {guest.email}
              </li>
            </ul>
          ))
        ) : (
          <div>
            <p>You Have Not Invited Any Guests</p>
            <Link to={`events/${props.eventId}/invite`}>
              <button type="submit">Invite Now!</button>
            </Link>
          </div>
        )}
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
    guests: state.events.currEvent.guests
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
