import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchEvent, sendEmail} from '../store/event'
// import EventTabs from './EventTabs'

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
  sendEmail() {
    console.log('OUTPUT: EventDetails -> sendEmail -> sendEmail')
    this.props.sendEmail('Tavilesa12@gmail.com')
  }
  render() {
    const date = formatDate(this.props.currEvent.date || [])
    return (
      <div>
        <h3>{this.props.currEvent.title}</h3>
        {/* <EventTabs /> */}
        <p>{this.props.currEvent.description}</p>
        <p>
          Day of the Event: {date.month}-{date.day}-20{date.year}
        </p>

        <button type="button" onClick={this.sendEmail.bind(this)}>
          Send email now
        </button>

        <button type="submit">Invite Members</button>
        <button type="submit">Create Tasks</button>
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

export default connect(mapState, mapDispatch)(EventDetails)