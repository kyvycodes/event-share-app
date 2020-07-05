import React from 'react'
import {connect} from 'react-redux'
import {createEvent} from '../store/event'
import swal from 'sweetalert'

const isEmpty = e => {
  const event = {}
  for (let i = 0; i < e.target.length; i++) {
    if (!e.target.elements[i].value) {
      return false
    } else {
      event[e.target.elements[i].getAttribute('name')] =
        e.target.elements[i].value
    }
  }
  return event
}

export class EventForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const event = isEmpty(e)
    if (!event) {
      swal('', 'Please fill out all input fields', 'error') // to be changed
    } else {
      this.props.createEvent(event)
    }
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <label>
            Event Title:
            <input type="text" name="title" />
          </label>
          <label>
            Event description:
            <input type="text" name="description" />
          </label>
          <label>
            Event Date:
            <input type="date" name="date" />
          </label>
          <label>
            Address:
            <input type="text" name="address" />
          </label>
          <label>
            City:
            <input type="text" name="city" />
          </label>
          <label htmlFor="state">State:</label>

          <select name="state" id="state">
            <option value="NY">NY</option>
            <option value="NJ">NJ</option>
            <option value="PA">PA</option>
            <option value="FL">FL</option>
          </select>
          <label>
            Zipcode:
            <input id="zipcode" name="zipcode" type="text" pattern="[0-9]*" />
          </label>
          <label>
            Start Time:
            <input type="time" name="startTime" />
          </label>
          <button type="submit" value="button">
            Create Event
          </button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(createEvent(event))
})

export default connect(null, mapDispatchToProps)(EventForm)
