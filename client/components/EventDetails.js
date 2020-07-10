import React from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {fetchEvent} from '../store/event'
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
        <h3>{this.props.currEvent.title}</h3>
        <p>{this.props.currEvent.description}</p>
        <p>
          Day of the Event: {date.month}-{date.day}-20{date.year}
        </p>
      
        <Box pt={2}>
          <Link to={`/events/${eventId}/invite`}>
            <Button color="primary">Invite</Button>
          </Link>
        </Box>

        <button type="submit">Create A Task</button>

        {/* <button type="button" onClick={this.sendEmail.bind(this)}>
          Send email now
        </button> */}

        <button type="submit">Create A Poll</button>
        <MapContainer />


        <Link to={`/events/${eventId}/add-task`}>
          <button type="submit">Create A Task</button>
        </Link>

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
