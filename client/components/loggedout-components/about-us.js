// import React from 'react'
// import {
//   Container,
//   Grid,
//   Typography
// } from '@material-ui/core'

// export const AboutUs = () => {
//   return (
//     <div>
//       <Container className="bt">
//         <Typography
//           variant="h4"
//           component="h2"
//           gutterBottom
//         >
//           Discover
//         </Typography>

//         <Grid container spacing={3}>
//           <Grid item xs={6} md={3}>
//             <img
//               src="hero-background.jpg"
//               alt="Lake"
//               style={{width: '100%'}}
//             />
//              <Typography>
//              Our app will put the fun back into
//           planning for get-togethers, reunions, parties, graduations and
//           celebrations of all types. EventShare is the best collaborative event
//           planning tool there is. We want your special occasion to be the best it
//           can be!
//           </Typography>
//           </Grid>
//           <Grid item xs={6} md={3}>
//             <img
//               src="6.jpg"
//               alt="Lake"
//               style={{width: '100%', marginBottom: '1rem'}}
//             />
//           </Grid>
//           <Grid item xs={6} md={3}>
//             <img
//               src="1.jpg"
//               alt="Lake"
//               style={{width: '100%', marginBottom: '1rem'}}
//             />
//           </Grid>
//           <Grid item xs={6} md={3}>
//             <img
//               src="2.jpg"
//               alt="Lake"
//               style={{width: '100%', marginBottom: '1rem'}}
//             />
//           </Grid>
//         </Grid>
//       </Container>
//     </div>
//   )
// }

import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core'
// import kyvz from "./kyvz-avatar.png"

const useStyles = makeStyles({
  // root: {
  //   maxWidth: 345,
  // },
  media: {
    height: 140
  },
  uniform: {
    textAlign: 'center'
  }
})

export const AboutUs = () => {
  const classes = useStyles()

  return (
    <Card className={classes.uniform}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          alt="Kay"
          height="140"
          // image={kyvz}
          // image={kyvz}
          // src="https://www.dropbox.com/h?preview=kyvz-avatar.png"
        />
        {/* <Avatar src={kyvz} alt="Kay"/> */}

        {/* className={classes.media} */}
        {/* <Avatar src={kyvz} alt="Kay"/> */}

        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Kay Hardeman
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            I have dealt with what seems like the impossible and persevered,
            preparing me for my new endeavor of becoming a full stack web
            developer.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          // image="/static/images/cards/contemplative-reptile.jpg"
          title="Tatiana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Tatiana Aviles
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            I’m ready to embrace change, switch careers and put my skills and
            passion to work.
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActionArea>
        <CardMedia
          className={classes.media}
          // image="/static/images/cards/contemplative-reptile.jpg"
          title="Serge"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Serge Aristide Nikiema
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            I really enjoy working with technology precisely web development
            tools and I wish to use my skills and contribute to big creation
            within a company.
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActionArea>
        <CardMedia
          className={classes.media}
          // image="/static/images/cards/contemplative-reptile.jpg"
          title="Luis"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Luis Carbajal
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            My ultimate goal is to build great products that help people to
            interact with information and the world in a new way.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
