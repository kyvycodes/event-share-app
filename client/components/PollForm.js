import React from 'react'
import {connect} from 'react-redux'
import {createPoll} from '../store/poll'

export class PollForm extends React.Component {
  constructor(props) {
    super()
    this.state = {
      options: [],
      title: '',
      currentOption: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleAddOption(event) {
    event.preventDefault()
    const option = this.state.currentOption

    this.setState({
      options: [...this.state.options, option],
      currentOption: ''
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const newPoll = {
      title: this.state.title,
      options: this.state.options,
      eventId: this.props.match.params.id
    }
    this.props.createPoll(newPoll)
  }

  render() {
    return (
      <div>
        <h1>Create A Poll For Your Event</h1>

        <label>
          <p>Poll Question</p>
          <input
            type="text"
            name="title"
            placeholder="question"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <p>Write Your Options</p>

          <input
            type="text"
            name="currentOption"
            placeholder="option"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <div>
          <button type="button" onClick={this.handleAddOption}>
            Add Option
          </button>
        </div>
        <h4>Your Options</h4>
        <div>
          {this.state.options.map(option => {
            return <p>{option}</p>
          })}

          <form onSubmit={this.handleSubmit}>
            <button type="submit">Create Poll</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createPoll: event => dispatch(createPoll(event))
})

export default connect(null, mapDispatchToProps)(PollForm)
