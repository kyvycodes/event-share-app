import React, {useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {createPost} from '../store/event'
import AddCircleIcon from '@material-ui/icons/AddCircle'

import {
  Container,
  Button,
  ButtonGroup,
  Grid,
  Card,
  CardMedia,
  Typography,
  TextField,
  FormControl,
  Divider
} from '@material-ui/core'

const toBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })

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
    this.uploadPic = this.uploadPic.bind(this)
  }

  async handlePhoto(e) {
    const base64Url = await toBase64(e.target.files[0])
    this.setState({fileUpload: base64Url})
  }

  handleCaption(e) {
    this.setState({caption: e.target.value})
  }

  uploadPic(e) {
    this.props.createPost(this.state, this.props.match.params.id)
  }
  render() {
    console.log('PROPS', this.props)
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
                        label="Add a short caption here"
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
                    <Button onClick={this.uploadPic}>
                      Upload
                      <AddCircleIcon />
                    </Button>
                  </form>
                </Card>
              </div>
            ) : (
              <p>You haven't chosen any photos yet</p>
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
    createPost: (post, eventId) => dispatch(createPost(post, eventId))
  }
}

export default withRouter(connect(mapState, mapDispatch)(PhotoUpload))
