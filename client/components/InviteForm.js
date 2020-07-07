import React from 'react'
import {connect} from 'react-redux'
import swal from 'sweetalert'
import {createInvitees} from '../store/event'
import {Link} from 'react-router-dom'

export class InviteForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      invitees: []
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    if (e.target.name.value === '' || e.target.email.value === '') {
      swal('Please fill out name and email')
    }
    const invitee = {
      name: e.target.name.value,
      email: e.target.email.value,
      eventId: this.props.match.params.id
    }
    e.target.name.value = ''
    e.target.email.value = ''
    this.setState({invitees: [...this.state.invitees, invitee]})
  }

  removeFromList(i) {
    const editedInvitees = [...this.state.invitees]
    editedInvitees.splice(i, 1)
    this.setState({invitees: editedInvitees})
  }

  sendEmails(invitees, user) {
    if (invitees.length === 0) {
      swal('please add at least one recipient')
    }
    this.props.createInvitees({invitees, user})
  }

  render() {
    return (
      <div>
        <h3>Invite People To Your Event</h3>
        <p>
          Send an email invite to everyone you want to join your event. Simply
          put their name, email and hit send
        </p>
        {/* {this.props.invitesSent.length > 0 ?
          <div>
            <p>Your email invitations have been sent</p>
            <button type="button">Go back to event</button>
            <button type="button">Send additional invitations</button>
          </div>

        : */}
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Email
              <input type="email" name="email" />
            </label>
            <button type="submit">Add To list</button>
          </form>
          <p>People you are inviting:</p>
          <ul>
            {this.state.invitees.map((member, i) => {
              return (
                <div key={i}>
                  <li>{member.email}</li>
                  <button type="button" onClick={() => this.removeFromList(i)}>
                    Remove
                  </button>
                </div>
              )
            })}
          </ul>
          <button
            type="button"
            onClick={() =>
              this.sendEmails(this.state.invitees, this.props.user.firstName)
            }
          >
            Send Invites
          </button>
        </div>
        {/* } */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    invitesSent: state.events.invitees
  }
}

const mapDispatchToProps = dispatch => ({
  createInvitees: invitees => dispatch(createInvitees(invitees))
})

export default connect(mapStateToProps, mapDispatchToProps)(InviteForm)
