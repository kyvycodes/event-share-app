import React from 'react'
import {connect} from 'react-redux'
import {getAllTasksForAnEvent} from '../store/task'
import {
  Container,
  Button,
  Chip,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Box,
  Avatar,
  Typography
} from '@material-ui/core'

export class TaskList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      eventId: null
    }
    this.handleChooseTask = this.handleChooseTask.bind(this)
  }

  async componentDidMount() {
    // dont forget to get eventDd dynamically
    await this.props.getAllTasksForAnEvent(1)
  }

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
          <Button color="primary">What to bring:</Button>
        </Box>

        <Divider />
        <List className="task-list">
          {tasks ? (
            tasks.map(task => {
              if (task.category === 'to bring') {
                return (
                  <div key={task.id}>
                    <ListItem alignItems="flex-start">
                      <ListItemText
                        primary={task.title}
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              className="inline"
                              color="textPrimary"
                            />
                            {task.description}
                          </React.Fragment>
                        }
                      />

                      <Chip
                        avatar={
                          <Avatar
                            alt="Natacha"
                            src="https://avatars0.githubusercontent.com/u/62249508?s=40&v=4"
                          />
                        }
                        label="Tatiana"
                        color="primary"
                        style={{backgroundColor: '#ff2400'}}
                        onClick={this.handleChooseTask}
                      />
                    </ListItem>
                    <Divider />
                  </div>
                )
              }
            })
          ) : (
            <h3>There are not tasks</h3>
          )}
          <Divider />
        </List>

        <Box pt={2}>
          <Button color="primary">What to Do:</Button>
        </Box>

        <Divider />
        <List className="task-list">
          {tasks ? (
            tasks.map(task => {
              if (task.category === 'to do') {
                return (
                  <div key={task.id}>
                    <ListItem alignItems="flex-start">
                      <ListItemText
                        primary={task.title}
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              className="inline"
                              color="textPrimary"
                            />
                            {task.description}
                          </React.Fragment>
                        }
                      />

                      <Chip
                        // avatar={<Avatar alt="Natacha" src="stactic/somthing" />}
                        label="Choose task"
                        color="primary"
                        style={{backgroundColor: 'lime'}}
                        // onDelete={handleDelete}
                      />
                    </ListItem>
                    <Divider />
                  </div>
                )
              }
            })
          ) : (
            <h3>There are not tasks</h3>
          )}
          <Divider />
        </List>
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

export default connect(mapState, mapDispatch)(TaskList)
