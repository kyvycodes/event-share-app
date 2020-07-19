import React from 'react'
import {connect} from 'react-redux'
import {Link, withRouter, useHistory} from 'react-router-dom'
import {fetchEvent, deleteEvent, updateUserAttendance} from '../store/event'
import {
  Paper,
  Grid,
  Box,
  Chip,
  Avatar,
  Button,
  ButtonGroup,
  Typography,
  Container,
  CardContent,
  Divider,
  IconButton,
  Tooltip
} from '@material-ui/core'
import MapContainer from './MapContainer'
import CalendarConnect from './calendar/calendarConnect'
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import EventIcon from '@material-ui/icons/Event'
import ScheduleIcon from '@material-ui/icons/Schedule'
import PeopleIcon from '@material-ui/icons/People'
import InfoIcon from '@material-ui/icons/Info'
import HighlightOffSharpIcon from '@material-ui/icons/HighlightOffSharp'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import DoneRoundedIcon from '@material-ui/icons/DoneRounded'
import SentimentDissatisfiedRoundedIcon from '@material-ui/icons/SentimentDissatisfiedRounded'
import history from '../history'

export const formatDate = date => {
  return {
    day: `${date[8]}${date[9]}`,
    month: `${date[5]}${date[6]}`,
    year: `${date[2]}${date[3]}`
  }
}

class EventDetails extends React.Component {
  async componentDidMount() {
    await this.props.getEvent(this.props.match.params.id)
  }

  render() {
    const currEvent = this.props.currEvent || []
    const attendance = currEvent.users_events || ['']
    const users = this.props.currEvent.users || []
    const date = formatDate(currEvent.date || [])
    const eventId = this.props.match.params.id
    let organizerName = ''
    users.forEach(user => {
      if (user.users_events.isOrganizer) organizerName = `${user.firstName}`
    })

    const getDirections = `http://maps.google.com/?q=${currEvent.address}, ${
      currEvent.city
    }`
    const address = `${currEvent.address}, ${currEvent.city}, ${
      currEvent.state
    } ${currEvent.zipcode}`

    console.log('ATTENDANCE', attendance)
    return (
      <div>
        {/* <Paper className="pad-1" justifycontent="center"> */}
        {/* <Grid container>
            <Grid item xs={12} md={6}> */}
        <Container maxWidth="sm">
          <MapContainer mb={2} address={address} />
          <Box pt={2} display="flex" className="space-between">
            <Grid item xs={6}>
              <Typography
                component="span"
                variant="body2"
                className="inline"
                color="textPrimary"
              >
                <a
                  href={getDirections}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="direcions"
                >
                  Get Directions
                </a>
              </Typography>
            </Grid>
          </Box>
          <CardContent>
            <Typography variant="button" display="block" color="textSecondary">
              {date.month}-{date.day}-20{date.year} at {currEvent.startTime} PM
            </Typography>

            <Typography variant="subtitle1">
              <b>{currEvent.title}</b>
            </Typography>
            <Typography color="textSecondary" variant="subtitle2">
              Hosted By {organizerName}
            </Typography>
          </CardContent>
          <Divider />
          <div align="center">
            <Typography>
              <b>Are You Going?</b>
            </Typography>

            {attendance[0].attending === 'Pending' ? (
              <div>
                <ButtonGroup
                  variant="contained"
                  aria-label="contained primary button group"
                >
                  <Button
                    size="small"
                    style={{backgroundColor: '#76B654', color: 'white'}}
                    onClick={() =>
                      this.props.updateUserAttendance(eventId, 'Attending')
                    }
                  >
                    YES
                  </Button>

                  <Button
                    size="small"
                    style={{backgroundColor: '#FF5757', color: 'white'}}
                    onClick={() =>
                      this.props.updateUserAttendance(eventId, 'Declined')
                    }
                  >
                    NO
                  </Button>
                </ButtonGroup>
              </div>
            ) : (
              <div>
                {attendance[0].attending === 'Attending' ? (
                  <div>
                    <Tooltip title="Change RSVP">
                      <IconButton
                        color="secondary"
                        size="small"
                        onClick={() =>
                          this.props.updateUserAttendance(eventId, 'Declined')
                        }
                      >
                        <HighlightOffSharpIcon
                          style={{
                            color: '#FF5757'
                          }}
                        />
                      </IconButton>
                    </Tooltip>
                    <Chip
                      label="Attending!"
                      color="primary"
                      size="small"
                      style={{
                        backgroundColor: '#76B654'
                      }}
                    />
                  </div>
                ) : (
                  <div>
                    <Tooltip title="Change RSVP">
                      <IconButton
                        color="secondary"
                        size="small"
                        onClick={() =>
                          this.props.updateUserAttendance(eventId, 'Attending')
                        }
                      >
                        <CheckCircleOutlineIcon
                          style={{
                            color: '#76B654'
                          }}
                        />
                      </IconButton>
                    </Tooltip>
                    <Chip
                      label="Declined"
                      color="primary"
                      size="small"
                      style={{
                        backgroundColor: '#FF5757'
                      }}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
          {this.props.isOrganizer && (
            <div className="profile">
              <ButtonGroup
                variant="contained"
                aria-label="contained primary button group"
              >
                <Button
                  size="small"
                  style={{backgroundColor: '#9370DB', color: 'white'}}
                  onClick={() => history.push(`/events/${eventId}/invite`)}
                >
                  Invite
                  <PersonAddOutlinedIcon />
                </Button>

                <Button
                  size="small"
                  style={{backgroundColor: '#9370DB', color: 'white'}}
                  onClick={() =>
                    history.push(`/events/${eventId}/polls/create`)
                  }
                >
                  Create Poll
                </Button>

                <Button
                  size="small"
                  style={{backgroundColor: '#9370DB', color: 'white'}}
                  onClick={() =>
                    history.push(`/events/${eventId}/tasks/add-task`)
                  }
                >
                  Create Task
                </Button>
              </ButtonGroup>
            </div>
          )}

          <Divider />

          <CardContent>
            <Typography variant="subtitle1">DETAILS</Typography>

            <Typography variant="subtitle1">
              <InfoIcon /> {currEvent.description}
            </Typography>
            <Typography variant="body1">
              <LocationOnIcon />
              {currEvent.address}
              <br />
              <LocationOnIcon
                style={{color: 'white', backgroundColor: 'white'}}
              />{' '}
              {currEvent.city}, {currEvent.zipcode}
            </Typography>
            <Typography variant="body1">
              <EventIcon /> {date.month}-{date.day}-20{date.year} at{' '}
              {currEvent.startTime} PM
            </Typography>
            <Typography variant="body1">
              <PeopleIcon /> {this.props.attending} confirmed
            </Typography>
            <Typography variant="body1">
              <b>Pending:</b>
              {this.props.pending} guests
            </Typography>
          </CardContent>

          {/* <Box mb={2} mr={1}>
                  <CalendarConnect event={this.props.currEvent} />
                </Box> */}
        </Container>
        {/* </Grid>
          </Grid> */}
      </div>
    )
  }
}

const mapState = state => {
  return {
    user: state.user,
    currEvent: state.events.currEvent,
    isOrganizer: state.events.organizer,
    attending: state.events.RSVPCount.areAttending
  }
}

const mapDispatch = dispatch => {
  return {
    getEvent: id => dispatch(fetchEvent(id)),
    deleteEvent: eventId => dispatch(deleteEvent(eventId)),
    updateUserAttendance: (eventId, dec) =>
      dispatch(updateUserAttendance(eventId, dec))
  }
}

export default withRouter(connect(mapState, mapDispatch)(EventDetails))
