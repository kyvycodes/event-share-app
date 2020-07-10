import React from 'react'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import {
  Container,
  Paper,
  Grid,
  Box,
  Button,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles(() => ({
  title: {
    marginTop: '1.2rem',
    color: 'white',
    marginBottom: '2rem'
  },
  subTitle: {
    marginTop: '1.5rem'
  },
  heroBackground: {
    height: '50vh',
    backgroundImage: `url(https://www.cdacasino.com/wp-content/uploads/2020/02/CDA-2837-Website-Sizes-March-2020-1120x680-7.jpg)`,
    backgroundPosition: 'left',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: '3rem 2rem'
  },
  ctaBtn: {
    marginBottom: '.1rem'
  }
}))

const Home = () => {
  const classes = useStyles()
  return (
    <>
      <Paper className={classes.heroBackground} elevation={3}>
        <Typography
          className={classes.title}
          variant="h5"
          component="h1"
          gutterBottom
          align="center"
        >
          Everything your team needs to create an event in one platform.
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          mt="7rem"
        >
          <Button
            className={classes.ctaBtn}
            color="secondary"
            component={Link}
            to="/signup"
            variant="contained"
            size="large"
          >
            Get Started
          </Button>

          <Button
            className={classes.ctaBtn}
            color="primary"
            component={Link}
            to="/Login"
            variant="contained"
            size="large"
          >
            Login
          </Button>
        </Box>
      </Paper>

      <Container>
        <Typography
          className={classes.subTitle}
          variant="h4"
          component="h2"
          gutterBottom
        >
          Discover
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={6} md={3}>
            <img
              src="hero-background.jpg"
              alt="Lake"
              style={{width: '100%', marginBottom: '1rem'}}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <img
              src="6.jpg"
              alt="Lake"
              style={{width: '100%', marginBottom: '1rem'}}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <img
              src="1.jpg"
              alt="Lake"
              style={{width: '100%', marginBottom: '1rem'}}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <img
              src="2.jpg"
              alt="Lake"
              style={{width: '100%', marginBottom: '1rem'}}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Home
