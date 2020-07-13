import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchEvent, updateEvent} from '../../store/event'
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

export class EditEvent extends Component {
  componentDidMount() {
    // this.props.getEvent(this.props.match.params.id)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const event = {}
    for (let i = 0; i < e.target.length; i++) {
      if (e.target.elements[i].value) {
        event[e.target.elements[i].getAttribute('name')] =
          e.target.elements[i].value
      }
    }
    console.log('EVENT', event)
    this.props.editEvent(event, this.props.match.params.id)
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
            <Typography>Title</Typography>
            <FormControl>
              <TextField
                size="small"
                type="title"
                // onChange={this.handleChange}
                // value={this.state.title}
                name="title"
                label={event.title}
                variant="outlined"

                // error={!!errorsTask.title}
                // helperText={errorsTask.title}
              />
            </FormControl>
            <FormControl>
              <Typography>Description</Typography>

              <TextField
                size="small"
                // onChange={this.handleChange}
                // value={this.state.description}
                name="description"
                label={event.description}
                variant="outlined"
              />
            </FormControl>
            <FormControl>
              <Typography>Street Address:</Typography>

              <TextField
                size="small"
                name="address"
                label={event.address}
                type="address"
                variant="outlined"
              />
            </FormControl>
            <FormControl>
              <Typography>City:</Typography>

              <TextField
                size="small"
                name="city"
                label={event.city}
                type="city"
                variant="outlined"
              />
            </FormControl>
            <FormControl>
              <Typography>Zipcode:</Typography>

              <TextField
                size="small"
                name="zipcode"
                label={event.zipcode}
                type="number"
                variant="outlined"
              />
            </FormControl>
            <FormControl>
              <Typography>Date:</Typography>

              <TextField
                size="small"
                name="date"
                label={event.date}
                type="date"
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
              />
            </FormControl>
            <FormControl>
              <Typography>Start Time:</Typography>

              <TextField
                size="small"
                id="time"
                label={event.startTime}
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
  getEvent: id => dispatch(fetchEvent(id)),
  editEvent: (event, id) => dispatch(updateEvent(event, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent)
