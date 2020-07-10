import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchEvent, updateUserAttendance} from '../store/event'
import DoneIcon from '@material-ui/icons/Done'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
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

import HighlightOffSharpIcon from '@material-ui/icons/HighlightOffSharp'
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
        <Container maxWidth="sm">
          <Box pt={2} display="flex" className="space-between">
            <Button color="primary">Invited To Event</Button>
            <Button color="primary">RSVP'd</Button>
          </Box>
          <Divider />
          <List className="task-list">
            {users.length !== 0 ? (
              users.map(user => {
                if (user.id === props.user.id) {
                  return (
                    <div key={user.id}>
                      <ListItem alignItems="flex-start">
                        <ListItemText>
                          {' '}
                          {user.firstName} {user.lastName}
                        </ListItemText>

                        {user.users_events.attending === 'pending' ? (
                          <div>
                            <Button
                              label="YES"
                              size="small"
                              variant="text"
                              style={{
                                backgroundColor: '#32CD32'
                              }}
                              onClick={() =>
                                props.updateUserAttendance(eventId, 'yes')
                              }
                            >
                              YES
                            </Button>

                            <Button
                              label="NO"
                              color="primary"
                              size="small"
                              variant="text"
                              style={{
                                backgroundColor: '#ff2400'
                              }}
                              onClick={() =>
                                props.updateUserAttendance(eventId, 'no')
                              }
                            >
                              NO
                            </Button>
                          </div>
                        ) : (
                          <div>
                            {user.users_events.attending === 'yes' ? (
                              <div>
                                <IconButton
                                  color="secondary"
                                  size="small"
                                  onClick={() =>
                                    props.updateUserAttendance(eventId, 'no')
                                  }
                                >
                                  <HighlightOffSharpIcon />
                                </IconButton>
                                <Chip
                                  label="Attending"
                                  color="primary"
                                  size="small"
                                  style={{
                                    backgroundColor: '#32CD32'
                                  }}
                                />
                              </div>
                            ) : (
                              <div>
                                <IconButton
                                  color="secondary"
                                  size="small"
                                  onClick={() =>
                                    props.updateUserAttendance(eventId, 'yes')
                                  }
                                >
                                  <CheckCircleOutlineIcon
                                    style={{
                                      color: '#32CD32'
                                    }}
                                  />
                                </IconButton>
                                <Chip
                                  label="Declined"
                                  color="primary"
                                  size="small"
                                  style={{
                                    backgroundColor: '#ff2400'
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        )}
                      </ListItem>
                      <Divider />
                    </div>
                  )
                } else {
                  return (
                    <div key={user.id}>
                      <ListItem alignItems="flex-start">
                        <ListItemText>
                          {' '}
                          {user.firstName} {user.lastName}
                        </ListItemText>
                        <div className="float-left">
                          {user.users_events.attending === 'yes' ? (
                            <ListItemText>Attending</ListItemText>
                          ) : (
                            <ListItemText>Declined</ListItemText>
                          )}
                        </div>
                      </ListItem>
                      <Divider />
                    </div>
                  )
                }
              })
            ) : (
              <p>No members have been invited</p>
            )}
            <br />
            <br />

            <Box pt={2} display="flex" className="space-between">
              <Button color="primary">Others Who Are Pending</Button>
            </Box>
            <Divider />

            {nonUsers.length !== 0 ? (
              nonUsers.map(nonUser => (
                <ListItem alignItems="flex-start" key={nonUser.id}>
                  <ListItemText>{nonUser.name}</ListItemText>
                  <Divider />
                </ListItem>
              ))
            ) : (
              <p>No pending invitations</p>
            )}
          </List>
          <Divider />
        </Container>
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
