import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getMe} from '../store/user'
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined'
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
  IconButton
} from '@material-ui/core'

const dummyData = [
  {
    firstName: 'Tatiana',
    profilePic:
      'https://avatars0.githubusercontent.com/u/1868782?s=460&u=2c72e54e297dc00128739a1207ce9c572bc34d4e&v=4',
    image:
      'https://fscomps.fotosearch.com/compc/CSP/CSP399/smiling-man-and-woman-cooking-barbecue-clipart__k53886204.jpg',
    caption: 'So excited for this BBQ!'
  },
  {
    firstName: 'Kay',
    profilePic:
      'https://avatars0.githubusercontent.com/u/1868782?s=460&u=2c72e54e297dc00128739a1207ce9c572bc34d4e&v=4',
    image:
      'https://images.squarespace-cdn.com/content/v1/582e516a5016e1e2d5d1e9ab/1479432075764-51XVMJIJI1BITQR2YB2J/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/IMG_2097.JPG?format=1500w',
    caption: "Who's ready for some BBQ?!"
  },
  {
    firstName: 'Serge',
    profilePic:
      'https://avatars0.githubusercontent.com/u/1868782?s=460&u=2c72e54e297dc00128739a1207ce9c572bc34d4e&v=4',
    image:
      'https://image.shutterstock.com/image-photo/family-having-barbecue-party-their-260nw-513989062.jpg',
    caption: 'Idk if I can eat anymore #sleepy'
  },
  {
    firstName: 'Tatiana',
    profilePic:
      'https://avatars0.githubusercontent.com/u/1868782?s=460&u=2c72e54e297dc00128739a1207ce9c572bc34d4e&v=4',
    Image:
      'https://fscomps.fotosearch.com/compc/CSP/CSP399/smiling-man-and-woman-cooking-barbecue-clipart__k53886204.jpg',
    caption: 'Thanks everyone for coming!'
  },
  {
    firstName: 'Serge',
    profilePic:
      'https://avatars0.githubusercontent.com/u/1868782?s=460&u=2c72e54e297dc00128739a1207ce9c572bc34d4e&v=4',
    image:
      'https://image.shutterstock.com/image-photo/family-having-barbecue-party-their-260nw-513989062.jpg',
    caption: 'Idk if I can eat anymore #sleepy'
  },
  {
    firstName: 'Serge',
    profilePic:
      'https://avatars0.githubusercontent.com/u/1868782?s=460&u=2c72e54e297dc00128739a1207ce9c572bc34d4e&v=4',
    image:
      'https://image.shutterstock.com/image-photo/family-having-barbecue-party-their-260nw-513989062.jpg',
    caption: 'Idk if I can eat anymore #sleepy'
  }
]

const useStyles = theme => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    // backgroundColor: red[500],
  }
})

export class PhotoFeed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fileUpload: null,
      pics: dummyData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({fileUpload: e.target.files[0]})
  }

  uploadPic() {}
  render() {
    console.log('FILE', this.state.fileUpload)

    return (
      <Container maxWidth="sm">
        <div className="profile">
          <Box pt={2} display="flex" className="space-between">
            <Typography>PHOTO FEED</Typography>
            <Link to={`events/${this.props.match.params.id}/photos/add`}>
              <Button>
                Add Picture
                <AddAPhotoOutlinedIcon />
              </Button>
            </Link>
          </Box>
        </div>
        <Box className="">
          {this.state.pics.map((pic, i) => {
            return (
              <Grid key={i}>
                <Card style={{}}>
                  <CardHeader
                    avatar={<Avatar size="small">{pic.profilePic}</Avatar>}
                    title={pic.firstName}
                    action={
                      <IconButton onClick={() => {}}>
                        <ClearOutlinedIcon />
                      </IconButton>
                    }
                  />
                  <CardMedia
                    component="img"
                    height="300"
                    // width="200"
                    image={pic.image}
                  />
                  <CardContent>
                    <Typography variant="body2" component="p">
                      <b>{pic.firstName} says:</b> {pic.caption}
                    </Typography>
                    <br />
                    <FormControl fullWidth={true}>
                      <TextField
                        label="Add comment..."
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
                    <br />
                  </CardContent>
                </Card>
                <br />
              </Grid>
            )
          })}
        </Box>
      </Container>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {}
}

const mapDispatch = dispatch => {
  return {}
}

export default connect(mapState, mapDispatch)(PhotoFeed)
