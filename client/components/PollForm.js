import React from 'react'
import {connect} from 'react-redux'
import {
  TextField,
  FormControl,
  Container,
  FormGroup,
  Button
} from '@material-ui/core'
// import setOption from '../store/options'
import getPoll from '../store/poll'

// there are a million ideas in here. Feel free to delete what you want. I have started from scratch multiple times

export class PollForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      options: []
      // optionOne: '',
      // optionTwo: '',
      // optionThree: ''
    }
    // this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // Options should be mapped thru

  // handleChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }

  handleSubmit(event) {
    event.preventDefault()

    //the first way I tried to handle the submit is below
    //     console.log('props', this.props)
    // this.props.addOption(this.state);
    // this.setState({
    //     title: ''
    // })
    const option = {
      title: event.target.title.value,
      eventId: this.props.match.params.id
    }

    event.target.title.value = ''

    this.props.setOptions(this.state)
    this.setState({
      options: [...this.state.options, option]
    })
    // eventId: event.id
  }

  render() {
    console.log('propssss', this.props)
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
              {/* INSTEAD OF MAPPING OPTION BY OPTION IT SHOULD BE MAPPED FROM OPTIONS STORED IN THE DB */}
              {/* <TextField
                onChange={this.handleChange}
                value={this.state.description}
                name="optionOne"
                label="option 1"
                variant="outlined"
              /> */}
            </FormControl>
            <FormControl>
              {/* <TextField
              //   onChange={this.handleChange}
              //   value={this.state.description}
              //   name="optionTwo"
              //   label="option 2"
              //   variant="outlined"
              // /> */}
            </FormControl>
            <FormControl>
              {/* <TextField
                onChange={this.handleChange}
                value={this.state.description}
                name="optionThree"
                label="option 3"
                variant="outlined"
              /> */}
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

// const mapDispatch = dispatch => {
//   return {
//     fetchPoll: poll => dispatch(getPoll(poll))
//   }
// }

export default connect(null, mapDispatch)(PollForm)

// export default connect(mapState, mapDispatch)(PollForm)
