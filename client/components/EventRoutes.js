import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch, Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import EventDetails from './EventDetails'
import InviteForm from './InviteForm'
import EventTabs from './EventTabs'
import AddTask from './addTask'
import taskList from './taskList'
import GuestList from './GuestList'

/**
 * COMPONENT
 */
export class EventRoutes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/events/:id/details" component={EventDetails} />
          <Route exact path="/events/:id/invite" component={InviteForm} />
          <Route exact path="/events/:id/guests" component={GuestList} />
          <Route exact path="/events/:id/tasks" component={taskList} />
          <Route exact path="/events/:id/add-task" component={AddTask} />
          <Route exact path="/events/:id/polls" component={InviteForm} />

          <Redirect from="/events/:id" to="/events/:id/details" exact />
          {/* <Route component={EventDetails} /> */}
        </Switch>
      </div>
    )
  }
}

export default withRouter(EventRoutes)
