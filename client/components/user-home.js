import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getMe} from '../store/user'
import {fetchUserEvents} from '../store/event'

import {getAllNotifications} from '../store/notifications'
import {formatDate} from './EventDetails'
/**
 * COMPONENT
 */
import {
  Container,
  Button,
  ButtonGroup,
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
import {useState} from 'react'

export const UserHome = props => {
  // effect functions can't be async, so declare the
  // async function inside the effect, then call it
  const [setValue, handleValue] = useState(true)
  /*
  useEffect every time a  value change inside the array the useEffect will excute again
  */
  useEffect(
    () => {
      async function fetchNotifications() {
        await props.getUser()
        await props.getUserEvents('upcoming')
        if (props.user.userParties) {
          const partiesOrganizedByUser = await props.user.userParties
          const userPartiesObj = {
            userPartiesArray: partiesOrganizedByUser
          }
          props.getAllNotifications(userPartiesObj)
        }
        if (!props.user.userParties) {
          handleValue(false)
        }
      }
      fetchNotifications()
    },
    [setValue]
  )

  const {firstName, lastName, email, profile_pic} = props.user
  const events = props.user.events || []
  const tasks = props.user.tasks || []
  console.log('PROPS', props)
  return (
    <div>
      <div className="profile">
        <img className="img-profile " src={profile_pic} />
        <h4>
          {firstName} {lastName}
        </h4>
        <p>{email}</p>
        <Link to="/events/add">
          <Button variant="contained" color="primary" size="small">
            Create Event
          </Button>{' '}
        </Link>
        <br />
        <br />

        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={() => props.getUserEvents('upcoming')}>
            Upcoming
          </Button>
          <Button onClick={() => props.getUserEvents('past')}>
            Past Events
          </Button>
        </ButtonGroup>
      </div>
      <div>
        <Container maxWidth="sm">
          <br />
          <Divider />
          <List className="task-list">
            {props.events.length > 0 ? (
              props.events.map(ev => {
                const date = formatDate(ev.event.date)
                return (
                  <div key={ev.event.id}>
                    <ListItem alignItems="flex-start">
                      <ListItemText
                        secondary={`${date.month}-${date.day}-20${date.year}`}
                      >
                        {ev.event.title}
                      </ListItemText>
                      <div className="float-left">
                        <Button>
                          <Link to={`events/${ev.event.id}`}>Details</Link>
                        </Button>
                      </div>
                    </ListItem>
                  </div>
                )
              })
            ) : (
              <p>You Have No Current Events</p>
            )}
          </List>
        </Container>
        <Container maxWidth="sm">
          <Box pt={2} display="flex" className="space-between">
            <Typography color="primary" size="small" style={{fontSize: '14px'}}>
              TASKS{' '}
            </Typography>
          </Box>
          <Divider />
          <List className="task-list">
            {tasks.length > 0 ? (
              tasks.map(task => (
                <div key={task.id}>
                  <ListItem alignItems="flex-start">
                    <ListItemText
                      secondary={task.description}
                      primary={task.title}
                    />
                    <div className="align-left">
                      <Button>Details</Button>
                    </div>
                  </ListItem>
                </div>
              ))
            ) : (
              <p>You Have No Current Tasks</p>
            )}
          </List>
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
    events: state.events.events,
    tasks: state.user.tasks,
    notifications: state.notifications
  }
}

const mapDispatch = dispatch => {
  return {
    getUser: () => dispatch(getMe()),
    getAllNotifications: eventId => dispatch(getAllNotifications(eventId)),
    getUserEvents: pastOrUpcoming => dispatch(fetchUserEvents(pastOrUpcoming))
  }
}

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
