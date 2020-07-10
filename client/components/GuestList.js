import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchEvent, updateUserAttendance} from '../store/event'
import DoneIcon from '@material-ui/icons/Done'
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone'
import {
  Container,
  Button,
  Chip,
  List,
  ListItem,
  Divider,
  ListItemText,
  Box,
  Avatar,
  Typography,
  IconButton,
  Grid
} from '@material-ui/core'

import RemoveCircleTwoToneIcon from '@material-ui/icons/RemoveCircleTwoTone'

/**
 * COMPONENT
 */

export const GuestList = props => {
  useEffect(() => {
    props.getEvent(props.match.params.id)
  }, [])
  const users = props.users || []
  const nonUsers = props.nonUsers || []
  const eventId = props.match.params.id
  return (
    <div>
      <div>
        <h4>Invited To Event</h4>
      </div>
      <div>
        <h4>Members</h4>
        {users.length !== 0 ? (
          users.map(user => {
            if (user.id === props.user.id) {
              return (
                <div key={user.id}>
                  <p>{user.firstName}</p>
                  <p>Attending?</p>
                  {user.users_events.attending === 'pending' ? (
                    <div>
                      <Chip
                        label="Yes"
                        color="primary"
                        style={{
                          backgroundColor: '#32CD32',
                          width: '50px'
                        }}
                        onClick={() =>
                          props.updateUserAttendance(eventId, 'yes')
                        }
                      />

                      <Chip
                        label="No"
                        color="primary"
                        style={{
                          backgroundColor: '#ff2400',
                          width: '50px'
                        }}
                        onClick={() =>
                          props.updateUserAttendance(eventId, 'no')
                        }
                      />
                    </div>
                  ) : (
                    <div>
                      {user.users_events.attending === 'yes' ? (
                        <div>
                          <Chip
                            label="Yes"
                            color="primary"
                            style={{
                              backgroundColor: '#32CD32',
                              width: '50px'
                            }}
                          />
                          <IconButton
                            color="secondary"
                            size="small"
                            onClick={() =>
                              props.updateUserAttendance(eventId, 'no')
                            }
                          >
                            <RemoveCircleTwoToneIcon />
                          </IconButton>
                        </div>
                      ) : (
                        <div>
                          <Chip
                            label="No"
                            color="primary"
                            style={{
                              backgroundColor: '#ff2400',
                              width: '50px'
                            }}
                          />
                          <IconButton
                            color="secondary"
                            size="small"
                            onClick={() =>
                              props.updateUserAttendance(eventId, 'yes')
                            }
                          >
                            <AddCircleTwoToneIcon />
                          </IconButton>
                        </div>
                      )}
                    </div>
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
          })
        ) : (
          <p>No members have been invited</p>
        )}
        <h4>Others</h4>
        {nonUsers.length !== 0 ? (
          nonUsers.map(nonUser => <p key={nonUser.id}>{nonUser.name}</p>)
        ) : (
          <p>No pending invitations</p>
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
    nonUsers: state.events.currEvent.invitees,
    users: state.events.currEvent.users
  }
}

const mapDispatch = dispatch => {
  return {
    getEvent: id => dispatch(fetchEvent(id)),
    updateUserAttendance: (eventId, dec) =>
      dispatch(updateUserAttendance(eventId, dec))
  }
}

export default connect(mapState, mapDispatch)(GuestList)

/**
 * PROP TYPES
 */
// GuestList.propTypes = {
//   email: PropTypes.string
// }
