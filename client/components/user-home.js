import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getMe} from '../store/user'
import {fetchUserEvents, deleteEvent} from '../store/event'
import DropMenuList from './AdditionalForms/DropDownMenu'

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
  Grid,
  Grow,
  Popper,
  Paper,
  ClickAwayListener,
  MenuItem,
  MenuList,
  makeStyles
} from '@material-ui/core'

import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

export class UserHome extends React.Component {
  componentDidMount() {
    this.props.getUser()
    this.props.getUserEvents('upcoming')
    this.props.getAllNotifications(1)
  }

  render() {
    const {firstName, lastName, email, profile_pic} = this.props.user
    const events = this.props.user.events || []
    const tasks = this.props.user.tasks || []
    console.log('PROPS', this.props)
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

          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
          >
            <Button onClick={() => this.props.getUserEvents('upcoming')}>
              Upcoming
            </Button>
            <Button onClick={() => this.props.getUserEvents('past')}>
              Past Events
            </Button>
          </ButtonGroup>
        </div>
        <div>
          <Container maxWidth="sm">
            <br />
            <p>My Events</p>
            <Divider />
            <List className="task-list">
              {this.props.myEvents.length > 0 ? (
                this.props.myEvents.map(ev => {
                  const date = formatDate(ev.event.date)
                  return (
                    <div key={ev.event.id}>
                      <ListItem alignItems="flex-start">
                        <ListItemText
                          secondary={`${date.month}-${date.day}-20${date.year}`}
                        >
                          {ev.event.title}
                        </ListItemText>
                        <DropMenuList
                          eventId={ev.event.id}
                          delete={this.props.deleteEvent}
                        />

                        <div>
                          <ListItemText secondary={ev.attending}>
                            <Link to={`events/${ev.event.id}`}>DETAILS</Link>
                          </ListItemText>
                        </div>
                      </ListItem>
                    </div>
                  )
                })
              ) : (
                <p>You Have No Events</p>
              )}
            </List>
          </Container>
          <Container>
            <p>My Friend's Events</p>
            <Divider />
            <List className="task-list">
              {this.props.events.length > 0 ? (
                this.props.events.map(ev => {
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
                <p>You Have No Events</p>
              )}
            </List>
          </Container>
          {/* <Container maxWidth="sm">
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
        </Container> */}
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user,
    events: state.events.events,
    myEvents: state.events.myEvents,
    tasks: state.user.tasks,
    notifications: state.notifications
  }
}

const mapDispatch = dispatch => {
  return {
    getUser: () => dispatch(getMe()),
    getAllNotifications: eventId => dispatch(getAllNotifications(eventId)),
    getUserEvents: pastOrUpcoming => dispatch(fetchUserEvents(pastOrUpcoming)),
    deleteEvent: eventId => dispatch(deleteEvent(eventId))
  }
}

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
