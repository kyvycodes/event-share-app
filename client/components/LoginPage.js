import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

//  '#22bfa0' color used for logo

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#9370DB'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3)
  },
  submit: {
    backgroundColor: 'black',
    margin: theme.spacing(3, 0, 2)
  }
}))

/**
 * COMPONENT
 */
export default function AuthFormLogin(props) {
  useEffect(() => {
    if (props.match.params.id && !window.localStorage.getItem('eventId')) {
      window.localStorage.setItem(
        'eventId',
        JSON.stringify(props.match.params.id)
      )
    }
  }, [])
  const {name, handleSubmit, displayName, error} = props
  const classes = useStyles()
  return (
    <Container component="main" maxWidth="xs" className={classes.main}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={e => {
            e.preventDefault()
            handleSubmit(e, props.match.params.id)
          }}
          name={name}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container justify="space-between">
            <Grid item>
              <Link href="/auth/google" variant="body2">
                {displayName} with Google
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                Don't have an account? Sign Up!
              </Link>
            </Grid>
          </Grid>
        </form>
        {error && error.response && <div> {error.response.data} </div>}
      </div>
      <Box mt={5} />
    </Container>
  )
}

const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt, id) {
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      const eventId = id
      localStorage.clear()
      dispatch(auth(email, password, null, null, formName, eventId))
    }
  }
}
export const Login = connect(mapLogin, mapDispatch)(AuthFormLogin)

AuthFormLogin.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
