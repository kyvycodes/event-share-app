import React from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {fetchEvent} from '../store/event'
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
import {Button, Box} from '@material-ui/core'
// import EventTabs from './EventTabs'
import MapContainer from './MapContainer'

const formatDate = date => {
  return {
    day: `${date[8]}${date[9]}`,
    month: `${date[5]}${date[6]}`,
    year: `${date[2]}${date[3]}`
  }
}
class EventDetails extends React.Component {
  componentDidMount() {
    this.props.getEvent(this.props.match.params.id)
  }

  render() {
    const date = formatDate(this.props.currEvent.date || [])
    const eventId = this.props.match.params.id
    return (
      <div>

        <Paper className="pad-1">
          <Grid container>
            <Grid container item xs={12} md={6}>
              <img
                className="marginB-1"
                style={{width: '100%', marginBottom: '1rem'}}
                src="/partyglass.jpg"
                alt="Party"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Container>
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

                {/* <Typography className="labelInfo">Host By{}</Typography> */}

                <Typography paragraph display="inline">
                  <Link to={`/profile/${1}`}>
                    {/* Host By {event.user.name} */}
                  </Link>
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
    currEvent: state.events.currEvent
  }
}

const mapDispatch = dispatch => {
  return {
    getEvent: id => dispatch(fetchEvent(id))
  }
}

export default withRouter(connect(mapState, mapDispatch)(EventDetails))
