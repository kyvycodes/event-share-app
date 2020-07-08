import React from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {fetchEvent, sendEmail} from '../store/event'

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
    console.log('PROPSSSS', this.props)
    return (
      <div>
        <h3>{this.props.currEvent.title}</h3>
        <p>{this.props.currEvent.description}</p>
        <p>
          Day of the Event: {date.month}-{date.day}-20{date.year}
        </p>
        <Link to={`/events/${eventId}/invite`}>
          <button type="button">Invite</button>
        </Link>
        <Link to={`/events/${eventId}/add-task`}>
          <button type="submit">Create A Task</button>
        </Link>
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
    getEvent: id => dispatch(fetchEvent(id)),
    sendEmail: email => dispatch(sendEmail(email))
  }
}

export default withRouter(connect(mapState, mapDispatch)(EventDetails))
