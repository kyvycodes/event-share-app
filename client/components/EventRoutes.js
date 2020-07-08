import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import EventDetails from './EventDetails'
import InviteForm from './InviteForm'
import Test from './test'
import EventTabs from './EventTabs'
import AddTask from './addTask'
import taskList from './taskList'

/**
 * COMPONENT
 */
export class EventRoutes extends Component {
  render() {
    console.log('INSIDE ROUTER', this.props)
    return (
      <div>
        <Switch>
          <Route exact path="/events/:id/details" component={EventDetails} />
          <Route exact path="/events/:id/invite" component={InviteForm} />
          <Route exact path="/events/:id/guests" component={InviteForm} />
          <Route exact path="/events/:id/tasks" component={taskList} />
          <Route exact path="/events/:id/add-task" component={AddTask} />
          <Route exact path="/events/:id/polls" component={InviteForm} />

          <Redirect from="/events/:id" to="/events/:id/details" exact />
          {/* <Route exact path="events/:id/invite" component={InviteForm} /> */}
          {/* <Route component={EventDetails} /> */}
        </Switch>
      </div>
    )
  }
}

const mapState = (state, ownProps) => {
  return {
    eventId: 2
  }
}

// // The `withRouter` wrapper makes sure that updates are not blocked
// // when the url changes
export default withRouter(connect(mapState)(EventRoutes))
