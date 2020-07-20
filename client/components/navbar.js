import React, {useState, useEffect} from 'react'
import {Link as RouterLink} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {logout} from '../store'
import {makeStyles} from '@material-ui/core/styles'
import {
  AppBar,
  Drawer,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
  Badge,
  Box
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import NotificationsIcon from '@material-ui/icons/Notifications'
import {
  getAllNotifications,
  resetAllNotifications
} from '../store/notifications'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  logoText: {
    flexGrow: 1
  },
  logo: {
    height: '50px'
  },
  sideDrawer: {
    minWidth: '15rem'
  },
  appBar: {
    backgroundColor: 'white'
  },
  notificationIcon: {
    marginRight: '1rem'
  }
}))

const Navbar = ({handleClick, isLoggedIn, notifications}) => {
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  useEffect(() => {
    getAllNotifications(1)
  }, [])

  return (
    <div className={classes.root}>
      <AppBar
        className=""
        position="static"
        style={{backgroundColor: '#74D2CA'}}
      >
        <Toolbar>
          <Typography variant="h5" className={classes.logoText}>
            <Button component={RouterLink} to="/home" color="inherit">
              <img className={classes.logo} src="/eventShareHeading.png" />
            </Button>
          </Typography>
          <IconButton
            edge="start"
            component={RouterLink}
            to="/notifications"
            color="inherit"
            aria-label="menu"
          >
            <Badge
              badgeContent={notifications.suggestions.length}
              color="secondary"
              className={classes.notificationIcon}
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            style={{color: 'white'}}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClick={() => setOpen(false)}
        onClose={() => setOpen(false)}
        onKeyDown={() => setOpen(false)}
      >
        <List className={classes.sideDrawer} component="nav">
          {/* The navbar will show these links after you log in */}
          {isLoggedIn ? (
            <div>
              <ListItem button component={RouterLink} to="/">
                {' '}
                <ArrowBackIosIcon />
              </ListItem>

              <ListItem button component={RouterLink} to="/home">
                {' '}
                <ListItemText primary="Profile" />
              </ListItem>

              <ListItem button component={RouterLink} to="/about-us">
                {' '}
                <ListItemText primary="About Us" />
              </ListItem>

              <ListItem button component={RouterLink} to="/FeedbackForm">
                {' '}
                <ListItemText primary="Feedback" />
              </ListItem>

              <ListItem button component={RouterLink} to="/testimonials">
                {' '}
                <ListItemText primary="Testimonials" />
              </ListItem>

              <ListItem onClick={handleClick} button>
                {' '}
                <ListItemText primary="Logout" />
              </ListItem>
            </div>
          ) : (
            <div>
              {/* The navbar will show these links before you log in */}
              {/* Create Component */}
              <ListItem button component={RouterLink} to="/">
                {' '}
                <ArrowBackIosIcon />
              </ListItem>

              <ListItem button component={RouterLink} to="/about-event-share">
                {' '}
                <ListItemText primary="Why EventShare?" />
              </ListItem>

              <ListItem button component={RouterLink} to="/login">
                {' '}
                <ListItemText primary="Login" />
              </ListItem>

              <ListItem button component={RouterLink} to="/signup">
                {' '}
                <ListItemText primary="Sign Up" />
              </ListItem>

              <ListItem button component={RouterLink} to="/about-us">
                {' '}
                <ListItemText primary="About Us" />
              </ListItem>

              <ListItem button component={RouterLink} to="/testimonials">
                {' '}
                <ListItemText primary="Testimonials" />
              </ListItem>

              <ListItem button component={RouterLink} to="/FeedbackForm">
                {' '}
                <ListItemText primary="Feedback" />
              </ListItem>
            </div>
          )}
        </List>
      </Drawer>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    notifications: state.notifications
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
      dispatch(resetAllNotifications())
    },
    getAllNotifications: eventId => dispatch(getAllNotifications(eventId))
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
