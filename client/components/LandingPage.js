import React from 'react'
//import ParticlesBg from 'particles-bg'
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}))

const LandingPage = () => {
  const classes = useStyles()
  return (
    <div>
      <section>
        {/* <ParticlesBg type="lines" num={450} bg={true} /> */}
        <div className="container-center">
          <div className="logo-place-holder">Logo</div>
          <div>
            <h1 className="big">PLAN YOUR EVENT</h1>

            <h2>
              Everything your team needs to create an event in one platform.
              <br />
            </h2>
          </div>
          <div className={classes.root}>
            <Link to="/signup">
              <Button variant="contained" color="primary">
                Get Started
              </Button>
            </Link>
            <Link to="/Login">
              <Button variant="contained" color="secondary">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <div>
        <h1>Discover</h1>
      </div>
      <section className="discover-place-holder">Image</section>
    </div>
  )
}

export default LandingPage
