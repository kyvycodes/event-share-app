import React from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {fetchEvent, deleteEvent} from '../store/event'
import {
  Paper,
  Grid,
  Box,
  Chip,
  Avatar,
  Button,
  Typography,
  Container
} from '@material-ui/core'
import MapContainer from './MapContainer'

export const formatDate = date => {
  return {
    day: `${date[8]}${date[9]}`,
    month: `${date[5]}${date[6]}`,
    year: `${date[2]}${date[3]}`
  }
}
class EventDetails extends React.Component {
  componentDidMount() {
    // this.props.getEvent(this.props.match.params.id)
  }

  render() {
    const getDirections = `http://maps.google.com/?q=${
      this.props.currEvent.address
    }, ${this.props.currEvent.city}`

    const date = formatDate(this.props.currEvent.date || [])
    const eventId = this.props.match.params.id

    return (
      <div>
        <Paper className="pad-1">
          <Grid container>
            <Grid item xs={12} md={6}>
              <Container>
                <MapContainer mb={2} />
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
                <Chip
                  color="primary"
                  style={{backgroundColor: '#32CD32'}}
                  label="Event title"
                />
                <Typography paragraph className="labelInfo">
                  {this.props.currEvent.title}
                </Typography>
                <Chip
                  color="primary"
                  style={{backgroundColor: '#32CD32'}}
                  label="Event details"
                />
                <Typography paragraph className="labelInfo">
                  {this.props.currEvent.description}
                </Typography>

                <Typography paragraph className="labelInfo">
                  Confirmed Guests: {this.props.attending}
                </Typography>
                <Chip
                  color="primary"
                  style={{backgroundColor: '#32CD32'}}
                  label=" Day of the event"
                />
                <Typography paragraph className="labelInfo">
                  {date.month}-{date.day}-20{date.year}
                </Typography>

                <Chip
                  color="primary"
                  style={{backgroundColor: '#32CD32'}}
                  label="Event address"
                />
                <Typography paragraph className="labelInfo">
                  {this.props.currEvent.address}, {this.props.currEvent.city}
                </Typography>

                <Chip
                  color="primary"
                  style={{backgroundColor: '#32CD32'}}
                  label="Start time"
                />
                <Typography paragraph className="labelInfo">
                  {this.props.currEvent.startTime}
                </Typography>

                <Chip
                  color="primary"
                  style={{backgroundColor: '#32CD32'}}
                  label="End time"
                />
                <Typography paragraph className="labelInfo">
                  To be determined
                </Typography>

                <Typography paragraph display="inline">
                  <Link to={`/profile/${1}`}>
                    {/* Host By {event.user.name} */}
                  </Link>
                </Typography>
                <Typography paragraph display="inline">
                  Your RSVP
                  {/* move yes/no here */}
                </Typography>

                <Box display="flex" mb={2} mr={1} justifyContent="center">
                  <Box mr={1}>
                    <Link to={`/events/${eventId}/invite`}>
                      <Button
                        size="small"
                        variant="contained"
                        color="secondary"
                      >
                        Invite
                      </Button>
                    </Link>
                  </Box>

                  <Link to={`/events/${eventId}/add-task`}>
                    <Button size="small" variant="contained" color="secondary">
                      Create A Task
                    </Button>
                  </Link>
                </Box>
              </Container>
            </Grid>
          </Grid>
        </Paper>
      </div>
    )
  }
}

const mapState = state => {
  return {
    user: state.user,
    currEvent: state.events.currEvent,
    isOrganizer: state.events.organizer,
    attending: state.events.attendingCount
  }
}

const mapDispatch = dispatch => {
  return {
    getEvent: id => dispatch(fetchEvent(id)),
    deleteEvent: eventId => dispatch(deleteEvent(eventId))
  }
}

export default withRouter(connect(mapState, mapDispatch)(EventDetails))
