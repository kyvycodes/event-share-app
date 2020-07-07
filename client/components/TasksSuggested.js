import React from 'react'
import {connect} from 'react-redux'
import {getAllTasksForAnEvent} from '../store/task'
import {
  Container,
  Button,
  Box,
  Typography,
  CardActionArea,
  Card,
  CardContent,
  CardActions
} from '@material-ui/core'

export class TasksSuggested extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      eventId: null
    }
    this.handleChooseTask = this.handleChooseTask.bind(this)
  }

  async componentDidMount() {}

  handleChooseTask(event) {
    event.preventDefault()
    const user = this.props.user
    let newTask = {
      taskId: 1,
      userId: user.id,
      eventId: 1
    }
    // this.props.addTaskToUser(newTask)
  }

  render() {
    const {tasks} = this.props
    return (
      <Container maxWidth="sm">
        <Box pt={2}>
          <Button color="primary"> Notification Center </Button>
        </Box>

        <Card className="">
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Beers
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Two packages of beers will be nice
              </Typography>
            </CardContent>
          </CardActionArea>

          <CardActions>
            <Button
              size="small"
              variant="contained"
              color="primary"
              className="btn-accept"
            >
              Approve
            </Button>

            <Button size="small" variant="contained" color="secondary">
              Decline
            </Button>
          </CardActions>
        </Card>
      </Container>
    )
  }
}

const mapState = state => {
  return {
    user: state.user,
    email: state.user.email,
    errorsTask: state.task.errorsTask,
    tasks: state.task.tasks
  }
}

const mapDispatch = dispatch => {
  return {
    setTask: task => dispatch(setTask(task)),
    getAllTasksForAnEvent: eventId => dispatch(getAllTasksForAnEvent(eventId))
  }
}

export default connect(mapState, mapDispatch)(TasksSuggested)
