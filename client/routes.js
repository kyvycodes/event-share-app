import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  // Login,
  Signup,
  UserHome,
  EventForm,
  EventDetails,
  EventTabs,
  EventApp,
  AddTask,
  TaskList,
  PollForm,
  InviteForm,
  Vote,
  Login
} from './components'
import {me} from './store'
import LandingPage from './components/LandingPage'
// import Login from './components/LoginPage'
import TasksSuggested from './components/TasksSuggested'
import {EventRoutes} from './components/EventRoutes'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route exact path="/" component={UserHome} />
            <Route exact path="/home" component={UserHome} />
            <Route exact path="/events/add" component={EventForm} />
            <Route path="/poll" component={PollForm} />
            {/* <Route path="/add-task" component={AddTask} /> */}
            <Route path="/events/:id" component={EventApp} />
            <Route path="/vote" component={Vote} />
            {/* <Route path="/add-task" component={AddTask} />
            <Route path="/task-list" component={TaskList} /> */}

            <Route path="/notifications" component={TasksSuggested} />
          </Switch>
        )}
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={LandingPage} />

        <Route exact path="/home" component={LandingPage} />

        {/* <Route exact path="/LoginPage" component={LoginPage} /> */}

        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/events/:id/guests" component={Login} />
        <Route exact path="/events/:id/signup" component={Signup} />

        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    )
  }
}

const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
