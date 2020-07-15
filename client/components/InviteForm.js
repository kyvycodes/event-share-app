import React from 'react'
import {connect} from 'react-redux'
import swal from 'sweetalert'
import {createInvites} from '../store/event'
import {
  TextField,
  FormControl,
  Container,
  FormGroup,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  Typography,
  Box
} from '@material-ui/core'

export class InviteForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      invitees: [],
      email: '',
      name: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    if (this.state.email === '' || this.state.name === '') {
      swal('Please fill out name and email')
    }
    const invitee = {
      name: this.state.name,
      email: this.state.email,
      eventId: this.props.match.params.id
    }

    this.setState({
      invitees: [...this.state.invitees, invitee],
      email: '',
      name: ''
    })
  }

  removeFromList(i) {
    const editedInvitees = [...this.state.invitees]
    editedInvitees.splice(i, 1)
    this.setState({invitees: editedInvitees})
  }

  sendEmails(invitees) {
    if (invitees.length === 0) {
      swal('please add at least one recipient')
      return
    }
    this.props.sendInvites(invitees, this.props.match.params.id)
  }

  render() {
    return (
      <Container maxWidth="sm">
        <form
          onSubmit={this.handleSubmit}
          className="addTask-form"
          noValidate
          autoComplete="off"
        >
          <h3 align="center" style={{fontFamily: '-apple-system'}}>
            Invite People To Your Event
          </h3>
          <Typography align="center" style={{color: '#737373'}}>
            Add everyone's name and email to the list. When you're finished with
            your email list, hit send!
          </Typography>
          <FormGroup>
            <FormControl>
              <TextField
                type="Name"
                name="name"
                label="Invitee's Name *"
                onChange={this.handleChange}
                value={this.state.name}
                variant="outlined"
                size="small"
              />
            </FormControl>
            <FormControl>
              <TextField
                type="email"
                name="email"
                label="Invitee's Email *"
                variant="outlined"
                size="small"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </FormControl>
          </FormGroup>
          <Box pt={1} display="flex">
            <Button
              className="btn-theme"
              type="submit"
              variant="contained"
              color="secondary"
            >
              Add To list
            </Button>

            <Button
              className="btn-theme"
              type="button"
              variant="contained"
              color="secondary"
              onClick={() => this.sendEmails(this.state.invitees)}
            >
              Send Invites
            </Button>
          </Box>
          <h4 align="center" style={{fontFamily: '-apple-system'}}>
            People You Are Sending Emails To:
          </h4>
          <Box display="flex">
            {this.state.invitees.length ? (
              <ul>
                {this.state.invitees.map((member, i) => {
                  return (
                    <div key={i}>
                      <li>{member.email}</li>
                      <button
                        type="button"
                        onClick={() => this.removeFromList(i)}
                      >
                        Remove
                      </button>
                    </div>
                  )
                })}
              </ul>
            ) : (
              <p align="center" style={{color: '#737373'}}>
                You haven't added anyone to your email list yet{' '}
              </p>
            )}
          </Box>
        </form>
      </Container>
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
  sendInvites: (invitees, eventId) => dispatch(createInvites(invitees, eventId))
})

export default connect(mapStateToProps, mapDispatchToProps)(InviteForm)
