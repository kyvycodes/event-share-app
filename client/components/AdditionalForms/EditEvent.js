import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchEvent} from '../../store/event'
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
  Typography
} from '@material-ui/core'

const isEmpty = e => {
  const event = {}
  for (let i = 0; i < e.target.length; i++) {
    event[e.target.elements[i].getAttribute('name')] =
      e.target.elements[i].value
  }
  return event
}

export class EditEvent extends Component {
  componentDidMount() {
    // this.props.getEvent(this.props.match.params.id)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const event = {}
    for (let i = 0; i < e.target.length; i++) {
      event[e.target.elements[i].getAttribute('name')] =
        e.target.elements[i].value
    }
    this.props.editEvent(event)
  }

  render() {
    const event = this.props.currEvent || []
    return (
      <Container maxWidth="sm">
        <form
          onSubmit={this.handleSubmit}
          className="addTask-form"
          noValidate
          autoComplete="off"
        >
          <h3 align="center">Edit Event</h3>
          <FormGroup>
            <Typography>Title: {event.title}</Typography>
            <FormControl>
              <TextField
                size="small"
                type="title"
                // onChange={this.handleChange}
                // value={this.state.title}
                name="title"
                label="Title"
                variant="outlined"

                // error={!!errorsTask.title}
                // helperText={errorsTask.title}
              />
            </FormControl>
            <FormControl>
              <Typography>Description: {event.description}</Typography>

              <TextField
                size="small"
                // onChange={this.handleChange}
                // value={this.state.description}
                name="description"
                label="Description"
                variant="outlined"
              />
            </FormControl>
            <FormControl>
              <Typography>Street Address: {event.address}</Typography>

              <TextField
                size="small"
                name="address"
                label="Street Address"
                type="address"
                variant="outlined"
              />
            </FormControl>
            <FormControl>
              <Typography>City: {event.city}</Typography>

              <TextField
                size="small"
                name="city"
                label="City"
                type="city"
                variant="outlined"
              />
            </FormControl>
            <FormControl>
              <Typography>Zipcode: {event.zipcode}</Typography>

              <TextField
                size="small"
                name="zipcode"
                label="Zipcode"
                type="number"
                variant="outlined"
              />
            </FormControl>
            <FormControl>
              <Typography>Date: {event.date}</Typography>

              <TextField
                size="small"
                name="date"
                label="Date"
                type="date"
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
              />
            </FormControl>
            <FormControl>
              <Typography>Start Time: {event.startTime}</Typography>

              <TextField
                size="small"
                id="time"
                label="Start Time"
                type="time"
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
                inputProps={{
                  step: 300 // 5 min
                }}
              />
            </FormControl>
            <FormControl />
          </FormGroup>
          <Button
            className="btn-theme"
            type="submit"
            variant="contained"
            color="secondary"
          >
            Submit Edits
          </Button>
        </form>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  currEvent: state.events.currEvent
})
const mapDispatchToProps = dispatch => ({
  getEvent: id => dispatch(fetchEvent(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent)
