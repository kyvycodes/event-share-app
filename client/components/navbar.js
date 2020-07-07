import React, {useState} from 'react'
import {Link as RouterLink} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {logout} from '../store'
import {makeStyles} from '@material-ui/core/styles'
import {
  Container,
  AppBar,
  Drawer,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
  Badge
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/Notifications'

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

const Navbar = ({handleClick, isLoggedIn}) => {
  const [open, setOpen] = useState(false)
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar className="" position="static">
        <Container>
          <Toolbar>
            <Typography variant="h5" className={classes.logoText}>
              <Button component={RouterLink} to="/home" color="inherit">
                EVENTSHARE
              </Button>
            </Typography>
            <Badge
              badgeContent={4}
              color="secondary"
              className={classes.notificationIcon}
            >
              <NotificationsIcon />
            </Badge>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
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
              <ListItem button component={RouterLink} to="/home">
                <ListItemText primary="Home" />
              </ListItem>

              <ListItem onClick={handleClick} button>
                <ListItemText primary="Logout" />
              </ListItem>
            </div>
          ) : (
            <div>
              {/* The navbar will show these links before you log in */}
              <ListItem button component={RouterLink} to="/login">
                <ListItemText primary="Login" />
              </ListItem>
              <ListItem button component={RouterLink} to="/signup">
                <ListItemText primary="Sign Up" />
              </ListItem>
            </div>
          )}
        </List>
      </Drawer>
      <hr />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
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
