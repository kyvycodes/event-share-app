import React from 'react'
import {connect} from 'react-redux'
import {getAllNotifications, deletelNotification} from '../store/notifications'
import {getMe} from '../store/user'
import {setTask} from '../store/task'
import {
  Container,
  Button,
  Box,
  Typography,
  CardActionArea,
  Card,
  CardContent,
  CardActions,
  IconButton
} from '@material-ui/core'
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff'

export class Notifications extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      eventId: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async componentDidMount() {
    // get user's parties
    await this.props.getMe()
    await this.props.user.userParties
    this.props.getAllNotifications(1)
  }

  async handleSubmit(category, description, title, suggestionId, event) {
    // const eventId = this.props.match.params.id
    let newTask = {
      title: title,
      description: description,
      category: category,
      eventId: 1
    }
    await this.props.setTask(newTask)
    this.props.deletelNotification(suggestionId)
  }

  render() {
    const {suggestions, polls} = this.props.notifications
    return (
      <Container maxWidth="sm">
        <Box pt={2}>
          <Button color="primary"> Notification Center </Button>
        </Box>
        {suggestions.length > 0 ? (
          suggestions.map(suggestion => {
            return (
              <Card className="card-notifications" key={suggestion.id}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {suggestion.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {suggestion.description} by {suggestion.authorName}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions>
                  <Button
                    onClick={this.handleSubmit.bind(
                      this,
                      suggestion.category,
                      suggestion.description,
                      suggestion.title,
                      suggestion.id
                    )}
                    size="small"
                    variant="contained"
                    color="secondary"
                    style={{
                      backgroundColor: '#32CD32'
                    }}
                  >
                    Approve
                  </Button>

                  <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    onClick={() =>
                      this.props.deletelNotification(suggestion.id)
                    }
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            )
          })
        ) : (
          <div align="center">
            <IconButton
              color="secondary"
              aria-label="add an alarm"
              size="medium"
            >
              <NotificationsOffIcon />
            </IconButton>
            <h4>Not notifications yet!</h4>
          </div>
        )}
      </Container>
    )
  }
}

const mapState = state => {
  return {
    user: state.user,
    email: state.user.email,
    errorsTask: state.task.errorsTask,
    tasks: state.task.tasks,
    notifications: state.notifications
  }
}

const mapDispatch = dispatch => {
  return {
    getAllNotifications: eventId => dispatch(getAllNotifications(eventId)),
    getMe: () => dispatch(getMe()),
    deletelNotification: id => dispatch(deletelNotification(id)),
    setTask: task => dispatch(setTask(task))
  }
}

export default connect(mapState, mapDispatch)(Notifications)
