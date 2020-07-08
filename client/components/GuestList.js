import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getMe} from '../store/user'
/**
 * COMPONENT
 */

export const GuestList = props => {
  useEffect(() => {
    // will call to get guests
  }, [])

  const guests = props.guests || []
  return (
    <div>
      <div>
        <h4>Invited To Event</h4>
        <button type="submit">Attending</button>
        <button type="submit">Declined</button>
      </div>
      <div>
        <h4>Your Guests</h4>
        {guests.length > 0 ? (
          guests.map(guest => (
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
    currEvent: state.user.currEvent
    // guests: state.user.guests
  }
}

const mapDispatch = dispatch => {
  return {
    // getUser: () => dispatch(getMe())
  }
}

export default connect(mapState, mapDispatch)(GuestList)

/**
 * PROP TYPES
 */
// GuestList.propTypes = {
//   email: PropTypes.string
// }
