import React from 'react'
import Typography from '@material-ui/core/Typography'
import Typed from 'react-typed'

export const EventShare = () => {
  return (
    <div>
      <header>
        <div>
          <div>
            <div>
              <div className="about-header">
                <h1 className="h1-header">Why Event Share? </h1>
                <br />
                <Typography variant="h5" className="typed-why">
                  <Typed
                    strings={[
                      'POLLING',
                      'INVITE',
                      'CREATE TASKS',
                      'RVSP',
                      'ADD TO CALENDAR',
                      'GET DIRECTIONS',
                      'ADD PICTURES',
                      'CHAT🎉'
                    ]}
                    style={{color: '#74d2ca'}}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                  />
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div>
        <div align="center">
          <h4 className="h4-about"> Collaborative</h4>
          <p style={{margin: '10px'}}>
            EventShare can help everyone create a successful event. Our flexible
            features encourage hosts to recruit multi-person planning teams to
            manage logistics and details for events large and small.
          </p>

          <h4 className="h4-about"> Easy</h4>
          <p style={{margin: '10px'}}>
            {' '}
            EvenShare is quick and easy to use. In seconds your signed up and
            you will only see the events you are hosting or attending as a
            guest. The layout is quick to understand and after just a few clicks
            you have a full blown event all set up!
          </p>

          <h4 className="h4-about"> Fun </h4>
          <p style={{margin: '10px'}}>
            We want to put the fun back into planning! Our goal is for hosts and
            guests to work together in a organized collaborative manner. We are
            ready to help you with get-togethers, reunions, parties, graduations
            and celebrations of all types.
          </p>
          <p style={{margin: '10px'}} />

          <h4 className="h4-about">Can't Wait any longer ? </h4>
          <p style={{margin: '10px'}} className="last-p">
            {' '}
            EventShare is the best collaborative event planning tool there is.
            We want your special occasion to be the best it can be.
            <a href="/signup"> Try it Out</a> today!
          </p>
          <br />
          <br />
        </div>
      </div>
    </div>
  )
}
//   return (
//     <div className="cover-why">
//     <div className="div-why">
//       <h1 className="h1-why">Why Event Share ?</h1>
//       <br />
//       <Typography variant="h5" className="typed-why">
//         <Typed
//           strings={[
//             'POLLING',
//             'INVITE',
//             'CREATE TASKS',
//             'RVSP',
//             'ADD TO CALENDAR',
//             'GET DIRECTIONS',
//             'ADD PICTURES',
//             'CHAT🎉'
//           ]}
//           style={{color: '#FF5757'}}
//           style={{font-family: 'Amatic SC}}

//           typeSpeed={40}
//           backSpeed={60}
//           loop
//         />
//       </Typography>
//       <br />
//       <p className="a-why">
//         {' '}
//         EventShare can help everyone create a successful event. Our flexible
//         features encourage hosts to recruit multi-person planning teams to
//         manage logistics and details for events large and small.</p>
//         <p className="b-why">We want to put the fun back into planning! Our goal is for hosts and guests to work together in a organized collaborative manner. We are ready to help you with get-togethers, reunions, parties, graduations and celebrations of all types.</p>
//         <p className="c-why">EventShare is the best
//         collaborative event planning tool there is. We want your special
//         occasion to be the best it can be.
//         <a href="/signup" className="a-why">
//           {' '}
//           Try it Out
//         </a>{' '}
//         today!
//       </p>
//     </div>
//   </div>
//   )
// }
