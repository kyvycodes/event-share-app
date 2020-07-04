import React from 'react'
import {connect} from 'react-redux'
import {setTask} from '../store/task'

import {
  TextField,
  FormControl,
  Container,
  FormGroup,
  Button
} from '@material-ui/core'

export class AddTask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      category: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    console.log('give props ', this.props)

    // const user = this.props.user
    // this.setState({
    //   userId: user.id
    // })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    let newTask = {
      title: this.state.title,
      description: this.state.description,
      // category: this.state.category,
      category: 'to do',
      userId: 1,
      dueDate: 'July 29 2020'
    }

    // const user = this.props;

    this.props.setTask(newTask)
  }

  render() {
    console.log('this.props.', this.props)
    return (
      <Container maxWidth="sm">
        <h3 align="center">Create a Task</h3>
        <form
          onSubmit={this.handleSubmit}
          className="addTask-form"
          noValidate
          autoComplete="off"
        >
          <FormGroup>
            <FormControl>
              <TextField
                onChange={this.handleChange}
                value={this.state.title}
                name="title"
                label="Title"
                variant="outlined"
              />
            </FormControl>
            <FormControl>
              <TextField
                onChange={this.handleChange}
                value={this.state.description}
                name="description"
                label="Description"
                variant="outlined"
              />
            </FormControl>

            <FormControl>
              <TextField
                onChange={this.handleChange}
                id="standard-basic"
                label="Category"
              />
            </FormControl>
          </FormGroup>

          <Button
            className="btn-theme"
            type="submit"
            size="large"
            variant="contained"
            color="secondary"
          >
            Create Now
          </Button>
        </form>
      </Container>
    )
  }
}

const mapState = state => {
  return {
    user: state.user,
    email: state.user.email
  }
}

const mapDispatch = dispatch => {
  return {
    setTask: task => dispatch(setTask(task))
  }
}

export default connect(mapState, mapDispatch)(AddTask)
