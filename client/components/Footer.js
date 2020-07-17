import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800]
  }
}))

export default function Footer() {
  const classes = useStyles()

  return (
    <div className={classes.root} className="push">
      <Container
        component="main"
        className={classes.main}
        maxWidth="sm"
        style={{backgroundColor: '#74D2CA'}}
      >
        {/* I had the footer in the right position and then got tired and messed something up, check out: https://css-tricks.com/couple-takes-sticky-footer/ */}
        <footer className="footer">
          <Typography variant="h5" component="h5" gutterBottom>
            {/* Sticky footer */}
          </Typography>
        </footer>
      </Container>
    </div>
  )
}
