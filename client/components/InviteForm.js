import React from 'react'
import {connect} from 'react-redux'
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

export class InviteForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {}

  render() {
    return (
      <div>
        <h3>Invite People To Your Event</h3>
        <p>
          Send an email invite to everyone you want to join your event. Simply
          put their name, email and hit send
        </p>

        <div className="form">
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Email
              <input type="email" name="email" />
            </label>
            <button type="submit" value="button">
              Add To list
            </button>
            <button type="submit" value="button">
              Send Invites
            </button>
          </form>
        </div>
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => ({
//   createEvent: event => dispatch(createEvent(event))
// })

export default connect(null, null)(InviteForm)
