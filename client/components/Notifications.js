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
    await this.props.getMe()
    // gets user's parties
    const partiesOrganizedByUser = await this.props.user.userParties
    const userPartiesObj = {
      userPartiesArray: partiesOrganizedByUser
    }
    if (partiesOrganizedByUser.length > 0) {
      this.props.getAllNotifications(userPartiesObj)
    }
  }

  async handleSubmit(
    category,
    description,
    title,
    suggestionId,
    eventId,
    event
  ) {
    let newTask = {
      title: title,
      description: description,
      category: category,
      eventId: eventId
    }
    await this.props.setTask(newTask)
    this.props.deletelNotification(suggestionId)
  }

  render() {
    const {suggestions} = this.props.notifications
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
                      suggestion.id,
                      suggestion.eventId
                    )}
                    size="small"
                    variant="contained"
                    color="secondary"
                    className="btn-accept"
                  >
                    Approve
                  </Button>

                  <Button
                    className="btn-taken"
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
    getAllNotifications: userPartiesObj =>
      dispatch(getAllNotifications(userPartiesObj)),
    getMe: () => dispatch(getMe()),
    deletelNotification: id => dispatch(deletelNotification(id)),
    setTask: task => dispatch(setTask(task))
  }
}

export default connect(mapState, mapDispatch)(Notifications)
