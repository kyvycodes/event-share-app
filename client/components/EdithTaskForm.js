import React from 'react'
import {connect} from 'react-redux'
import {setTask, editTaskThunk} from '../store/task'
import {
  TextField,
  FormControl,
  Container,
  FormGroup,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText
} from '@material-ui/core'

export class EdithTaskForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      category: '',
      errorsTask: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errorsTask) {
      this.setState({errorsTask: nextProps.errorsTask})
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event) {
    event.preventDefault()
    const taskId = this.props.match.params.taskId
    //const eventId = this.props.match.params.eventId

    let edithTask = {
      title: this.state.title,
      description: this.state.description,
      category: this.state.category,
      eventId: this.props.match.params.id
    }
    //console.log('EVENTID', edithTask.eventId)
    //console.log('PROPS', edithTask)
    //console.log('ID', taskId)
    await this.props.editTask(taskId, edithTask)
    //console.log('****errorsTask', this.state.errorsTask.title)
    // if (!this.state.errorsTask.title) {
    //   this.props.history.push(`/events/${eventId}/tasks`)
    // }
  }

  render() {
    const {errorsTask} = this.state
    const {task} = this.state
    return (
      <Container maxWidth="sm">
        <form
          onSubmit={this.handleSubmit}
          className="addTask-form"
          noValidate
          autoComplete="off"
        >
          <h3 align="center">Edith Task</h3>
          <FormGroup>
            <FormControl>
              <TextField
                type="tittle"
                onChange={this.handleChange}
                value={this.state.title}
                name="title"
                label="Edith Name *"
                variant="outlined"
                error={!!errorsTask.title}
                helperText={errorsTask.title}
              />
            </FormControl>
            <FormControl>
              <TextField
                onChange={this.handleChange}
                value={this.state.description}
                name="description"
                label="Edith Description"
                variant="outlined"
              />
            </FormControl>

            <FormControl fullWidth={true} variant="outlined" margin="normal">
              <InputLabel id="demo-simple-select-filled-label">
                Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                label="Edith Category"
                name="category"
                value={this.state.category}
                onChange={this.handleChange}
                error={!!errorsTask.category}
              >
                <MenuItem value="to do">To Do</MenuItem>
                <MenuItem value="to bring">To Bring</MenuItem>
              </Select>
              <FormHelperText error>{errorsTask.category}</FormHelperText>
            </FormControl>
          </FormGroup>
          <Button
            className="btn-theme"
            type="submit"
            variant="contained"
            color="secondary"
            onClick={this.handleSubmit}
          >
            Update task
          </Button>
        </form>
      </Container>
    )
  }
}

const mapState = state => {
  return {
    task: state.task
  }
}

const mapDispatch = dispatch => {
  return {
    editTask: (taskId, task) => dispatch(editTaskThunk(taskId, task))
  }
}

export default connect(mapState, mapDispatch)(EdithTaskForm)
