import React from 'react'
import {connect} from 'react-redux'
import {
  TextField,
  FormControl,
  Container,
  FormGroup,
  Button
} from '@material-ui/core'
import options from '../store/options'

export class PollForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      optionOne: '',
      optionTwo: '',
      optionThree: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const poll = this.props.poll

    let newPoll = {
      title: this.state.title,
      optionOne: this.state.optionOne,
      optionTwo: this.state.optionTwo,
      optionThree: this.state.optionThree,
      eventId: event.id
    }
    this.props.setOption(newPoll) //fix
  }
  render() {
    return (
      <Container maxWidth="sm">
        <form onSubmit={this.handleSubmit}>
          <h3 align="center">Create a Poll</h3>
          <FormGroup>
            <FormControl>
              <TextField
                type="title"
                onChange={this.handleChange}
                value={this.state.title}
                name="title"
              />
            </FormControl>
            <FormControl>
              <TextField
                onChange={this.handleChange}
                value={this.state.description}
                name="optionOne"
                label="option 1"
                variant="outlined"
              />
            </FormControl>
            <FormControl>
              <TextField
                onChange={this.handleChange}
                value={this.state.description}
                name="optionTwo"
                label="option 2"
                variant="outlined"
              />
            </FormControl>
            <FormControl>
              <TextField
                onChange={this.handleChange}
                value={this.state.description}
                name="optionThree"
                label="option 3"
                variant="outlined"
              />
            </FormControl>
          </FormGroup>
          <Button type="submit">Create Poll</Button>
        </form>
      </Container>
    )
  }
}

const mapState = state => {
  return {
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    addOption: poll => dispatch(setOption(poll))
  }
}

export default connect(mapState, mapDispatch)(PollForm)
