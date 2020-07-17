import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getMe} from '../store/user'
import {createPost} from '../store/event'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined' /**
 * COMPONENT
 */
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
  TextField,
  FormControl
} from '@material-ui/core'

export class PhotoUpload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fileUpload: null,
      file: null,
      caption: ''
    }
    this.handlePhoto = this.handlePhoto.bind(this)
    this.handleCaption = this.handleCaption.bind(this)
  }

  handlePhoto(e) {
    this.setState({
      fileUpload: URL.createObjectURL(e.target.files[0]),
      file: e.target.files[0]
    })
  }

  handleCaption(e) {
    this.setState({caption: e.target.value})
  }

  uploadPic() {}
  render() {
    return (
      <Container maxWidth="sm">
        <div className="profile">
          <div>
            <Typography>Photo Feed!</Typography>
            <input type="file" onChange={this.handlePhoto} />
          </div>
          <br />
          <Divider />

          <div className="addTask-form">
            {this.state.fileUpload ? (
              <div>
                <Card>
                  <CardMedia
                    component="img"
                    src={this.state.fileUpload}
                    height="300"
                  />
                  <form>
                    <FormControl fullWidth={true} variant="outlined" style={{}}>
                      <TextField
                        label="Add a short caption..."
                        InputLabelProps={{
                          shrink: true
                        }}
                        size="small"
                        name="caption"
                        type="text"
                        variant="outlined"
                        onChange={this.handleCaption}
                      />
                    </FormControl>
                    <Button>
                      Upload
                      <AddCircleIcon fontSize="large" />
                    </Button>
                  </form>
                </Card>
              </div>
            ) : (
              <p>You haven't uploaded any photos yet</p>
            )}
          </div>
        </div>
      </Container>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    createPost: post => dispatch(createPost(post))
  }
}

export default connect(mapState, mapDispatch)(PhotoUpload)
