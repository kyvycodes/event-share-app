import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchEvent} from '../store/event'

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
    const eventId = this.props.currEvent.id

    return (
      <div>
        <h3>{this.props.currEvent.title}</h3>
        <p>{this.props.currEvent.description}</p>
        <p>
          Day of the Event: {date.month}-{date.day}-20{date.year}
        </p>
        <Link to={`/events/${eventId}/invite`}>
          <button type="submit">Invite Members</button>
        </Link>
        <button type="submit">Create A Task</button>
        <button type="submit">Create A Poll</button>
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

export default connect(mapState, mapDispatch)(EventDetails)
