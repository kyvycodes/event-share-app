import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link as RouterLink} from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import TabContext from '@material-ui/lab/TabContext'
import TabList from '@material-ui/lab/TabList'
import {fetchEvent} from '../store/event'
import TaskList from './taskList'
import EventDetails from './EventDetails'
import GuestList from './GuestList'
import InviteForm from './InviteForm'
import TabPanel from '@material-ui/lab/TabPanel'
class EventTabs extends React.Component {
  state = {
    value: '1'
  }

  handleChange(event, newValue) {
    this.setState({value: newValue})
  }

  componentDidMount() {
    this.props.getEvent(this.props.match.params.id)
  }
  render() {
    const eventId = this.props.match.params.id

    return (
      <div className="">
        <Typography
          align="center"
          component="h1"
          variant="h5"
          color="secondary"
          className="eventTitle"
        >
          {this.props.currEvent.title}🎉
        </Typography>

        <TabContext value={this.state.value}>
          <AppBar position="static" color="secondary">
            <TabList
              onChange={this.handleChange.bind(this)}
              aria-label="simple tabs example"
            >
              <Tab
                label="Details"
                value="1"
                component={RouterLink}
                to={`/events/${eventId}/details`}
              />
              <Tab label="Guests" value="2" />
              <Tab
                label="Tasks"
                value="3"
                component={RouterLink}
                to={`/events/${eventId}/tasks`}
              />
              <Tab label="Polls" value="4" />
              <Tab
                label="Invite"
                value="5"
                component={RouterLink}
                to={`/events/${this.props.match.params.id}/invite`}
              />
            </TabList>
          </AppBar>
          {/* <TabPanel value="1">
            <EventDetails  component={Link}
            to="/events/:id/invite" />
          </TabPanel> */}
          <TabPanel value="2">
            <GuestList eventId={eventId} />
          </TabPanel>
          {/* <TabPanel value="3">
            <TaskList /> */}
          {/* </TabPanel> */}
          <TabPanel value="4">
            Polls goes here whenever it is ready import the component and added
            here
          </TabPanel>
          {/* <TabPanel value="5">
            <InviteForm eventId={eventId} />
          </TabPanel> */}
        </TabContext>
      </div>
    )
  }
}

const mapState = state => {
  return {
    user: state.user,
    currEvent: state.events.currEvent
  }
}

const mapDispatch = dispatch => {
  return {
    getEvent: id => dispatch(fetchEvent(id))
  }
}

export default withRouter(connect(mapState, mapDispatch)(EventTabs))
