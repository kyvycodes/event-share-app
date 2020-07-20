import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchEvent, updateUserAttendance} from '../store/event'
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

export const GuestList = props => {
  useEffect(() => {
    props.getEvent(props.match.params.id)
  }, [])
  const currEvent = props.currEvent || []
  const users = currEvent.users || []
  const nonUsers = currEvent.invitees || []
  const eventId = props.match.params.id
  return (
    <div>
      <div>
        <Container maxWidth="sm">
          <Box pt={2} display="flex" className="space-between">
            <Button color="primary">Total: {users.length}</Button>
            <Button color="primary">
              Attending: {props.attending.areAttending}
            </Button>
          </Box>
          <Divider />
          <List className="task-list">
            {users.length !== 0 ? (
              users.map(user => {
                return (
                  <div key={user.id}>
                    <ListItem alignItems="flex-start">
                      <ListItemText display="flex" className="guest-list">
                        <Avatar
                          className="float-rigth"
                          size="small"
                          alt={user.firstName}
                          src={user.profile_pic}
                        />
                        <Typography className="float.middle">
                          {' '}
                          {user.firstName} {user.lastName}
                        </Typography>
                      </ListItemText>
                      <div className="float-left">
                        <ListItemText>
                          {user.users_events.attending}
                        </ListItemText>
                      </div>
                    </ListItem>
                    <Divider />
                  </div>
                )
              })
            ) : (
              <p>No members have been invited</p>
            )}
            <br />
            <br />

            <Box pt={2} display="flex" className="space-between">
              <Button color="primary">Others who aren't users</Button>
            </Box>
            <Divider />

            {nonUsers.length !== 0 ? (
              nonUsers.map(nonUser => (
                <div key={nonUser.id}>
                  <ListItem alignItems="flex-start">
                    <ListItemText>{nonUser.name}</ListItemText>
                  </ListItem>
                  <Divider />
                </div>
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
    attending: state.events.RSVPCount
    // // nonUsers: state.events.currEvent.invitees,
    // users: state.events.currEvent.users
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
