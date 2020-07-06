import React from 'react'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
// import Guests from './';
import TaskList from './taskList'
import EventDetails from './EventDetails'
// import Polls from './';

function TabPanel(props) {
  const {children, value, index, ...other} = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white'
  }
}))

export default function EventTabs() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs">
          <Tab label="Details" {...a11yProps(0)} />
          <Tab label="Guests" {...a11yProps(1)} />
          <Tab label="Tasks" {...a11yProps(2)} />
          <Tab label="Polls" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <EventDetails />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Guests goes here whenever it is ready import the component and added
        here
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TaskList />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Polls goes here whenever it is ready import the component and added here
      </TabPanel>
    </div>
  )
}
