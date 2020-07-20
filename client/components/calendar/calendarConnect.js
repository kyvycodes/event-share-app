import React from 'react'
import {Button} from '@material-ui/core'

export const formatDate = date => {
  return {
    day: `${date[8]}${date[9]}`,
    month: `${date[5]}${date[6]}`,
    year: `${date[2]}${date[3]}`
  }
}

function CalendarConnect(props) {
  // console.log('props', props)
  // console.log("TIME", props.event.startTime)
  // const endTime = (props.event.startTime + '4:00')
  // const GMTOFF = '-5:00'
  // const startTime = props.event.startTime % GMTOFF
  var gapi = window.gapi
  /*
    Update with your own Client Id and Api key
  */

  var CLIENT_ID =
    '808314770859-1c9t6unkt408pf6cak4u4g14jih20csi.apps.googleusercontent.com'
  var API_KEY = 'AIzaSyBHJ7fXAqcoHK3tGW4nrQfc7fP_o7_EOsE'
  var DISCOVERY_DOCS = [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'
  ]
  var SCOPES = 'https://www.googleapis.com/auth/calendar.events'

  const handleClick = () => {
    gapi.load('client:auth2', () => {
      console.log('loaded client')

      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
      })

      gapi.client.load('calendar', 'v3', () => console.log('bam!'))

      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          var event = {
            summary: `${props.event.title}`,
            location: `${props.event.address}`,
            description: `${props.event.description}`,

            start: {
              dateTime: `${props.event.date}`,
              time: `${props.event.startTime}`,
              timeZone: 'America/New_York'
            },

            end: {
              dateTime: `${props.event.date}`,
              time: `${props.event.startTime}`,
              timeZone: 'America/New_York'
            },
            // recurrence: ['RRULE:FREQ=DAILY;COUNT=2'],
            // attendees: [
            //   {email: 'lpage@example.com'},
            //   {email: 'sbrin@example.com'}
            // ],
            reminders: {
              useDefault: false,
              overrides: [
                {method: 'email', minutes: 24 * 60},
                {method: 'popup', minutes: 10}
              ]
            }
          }
          var request = gapi.client.calendar.events.insert({
            calendarId: 'primary',
            resource: event
          })

          request.execute(event => {
            console.log(event)
            window.open(event.htmlLink)
          })

          /*
            Uncomment the following block to get events
        */

          // get events
          // gapi.client.calendar.events.list({
          //   'calendarId': 'primary',
          //   'timeMin': (new Date()).toISOString(),
          //   'showDeleted': false,
          //   'singleEvents': true,
          //   'maxResults': 10,
          //   'orderBy': 'startTime'
          // }).then(response => {
          //   const events = response.result.items
          //   console.log('EVENTS: ', events)
          // })
        })
    })
  }

  return (
    <div>
      <Button
        className="calendar-btn"
        color="primary"
        size="small"
        onClick={handleClick}
      >
        Add to Calendar
      </Button>
    </div>
  )
}

export default CalendarConnect
