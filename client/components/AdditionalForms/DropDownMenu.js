import React from 'react'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import Menu from '@material-ui/core/Menu'
import {makeStyles} from '@material-ui/core/styles'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import {Link} from 'react-router-dom'

export default function MenuListComposition(props) {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleDelete = () => {
    console.log('PROPS IN MENU', props)
    var shouldDelete = confirm('Do you really want to delete this event?')
    if (shouldDelete) {
      props.delete(props.eventId)
    }
  }

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
        <Link to={props.eventLink}>
          <MenuItem onClick={handleClose}>Edit</MenuItem>
        </Link>
      </Menu>
    </div>
  )
}
