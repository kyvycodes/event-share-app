import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {fetchPosts, createComment} from '../store/event'
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined'

import {
  Container,
  Button,
  ButtonGroup,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  CardActions,
  Divider,
  Avatar,
  Typography,
  Box,
  TextField,
  FormControl,
  IconButton,
  InputBase,
  Paper,
  InputAdornment
} from '@material-ui/core'

export class PhotoFeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: ''
    }
    this.isUser = this.isUser.bind(this)
    this.handleComment = this.handleComment.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.getPosts(this.props.match.params.id)
  }

  handleSubmit(postId) {
    this.props.postComment(
      this.state.comment,
      postId,
      this.props.match.params.id
    )
  }
  handleComment(e) {
    this.setState({comment: e.target.value})
  }
  isUser(postUserId, userId) {
    return postUserId === userId
  }

  render() {
    const posts = this.props.posts || []
    const eventId = this.props.match.params.id
    let icon = <p />
    return (
      <Container maxWidth="sm">
        <div className="profile">
          <Box pt={2} display="flex" className="space-between">
            <Typography variant="button">Photo Feed</Typography>
            <Link to={`/events/${eventId}/photos/add`}>
              <Button
                pt={2}
                variant="contained"
                size="small"
                className="btn-create"
                style={{backgroundColor: '#9370DB', color: 'white'}}
              >
                Add
                <AddAPhotoOutlinedIcon size="small" />
              </Button>
            </Link>
          </Box>
        </div>
        <Box className="">
          {posts.length === 0 ? (
            <Typography>No one has posted any pictures yet</Typography>
          ) : (
            posts.map(pic => {
              console.log(this.props.user.id, pic.userId)
              if (this.isUser(this.props.user.id, pic.userId)) {
                icon = <ClearOutlinedIcon />
              } else {
                icon = ''
              }
              return (
                <Grid key={pic.id}>
                  <Card style={{}}>
                    <CardHeader
                      avatar={
                        <Avatar
                          size="small"
                          alt={pic.user.firstName}
                          src={pic.user.profile_pic}
                        />
                      }
                      title={pic.user.firstName}
                      action={
                        <IconButton onClick={() => {}}>{icon}</IconButton>
                      }
                    />
                    <CardMedia
                      component="img"
                      height="300"
                      image={pic.fileUrl}
                    />
                    <CardContent>
                      <Typography variant="caption" display="block">
                        <b>{pic.user.firstName} says:</b> {pic.caption}
                      </Typography>
                      <br />

                      <FormControl
                        fullWidth={true}
                        variant="outlined"
                        style={{}}
                      >
                        <TextField
                          size="small"
                          type="title"
                          name="comment"
                          variant="outlined"
                          label="Add a comment"
                          InputLabelProps={{
                            shrink: true
                          }}
                          onChange={this.handleComment}
                        />
                      </FormControl>
                      <IconButton onClick={() => this.handleSubmit(pic.id)}>
                        <AddCircleIcon className="icons" />
                      </IconButton>
                      {pic.photoComments.length > 0 &&
                        pic.photoComments.map(comm => (
                          <Typography
                            key={comm.id}
                            variant="caption"
                            display="block"
                          >
                            <b>{comm.user.firstName} says:</b> {comm.comment}
                          </Typography>
                        ))}
                    </CardContent>
                  </Card>
                  <br />
                </Grid>
              )
            })
          )}
        </Box>
      </Container>
    )
  }
}

const mapState = state => {
  return {
    user: state.user,
    posts: state.events.posts,
    currEvent: state.events.currEvent,
    isOrganizer: state.events.organizer
  }
}

const mapDispatch = dispatch => {
  return {
    getPosts: id => dispatch(fetchPosts(id)),
    postComment: (comment, postId, eventId) =>
      dispatch(createComment(comment, postId, eventId))
  }
}

export default withRouter(connect(mapState, mapDispatch)(PhotoFeed))
