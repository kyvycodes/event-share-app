import axios from 'axios'
import history from '../history'

const GET_EVENTS = 'GET_EVENTS'
const GET_ONE_EVENT = 'GET_EVENT'
const ADD_EVENT = 'ADD_EVENT'
const GET_INVITEES = 'GET_INVITEE'
const ADD_INVITEE = 'ADD_INVITEE'

const getEvents = events => ({
  type: GET_EVENTS,
  events
})

const getEvent = event => ({
  type: GET_ONE_EVENT,
  event
})

const addInvitee = invitee => ({
  type: ADD_INVITEE,
  invitee
})

const getInvitees = invitees => ({
  type: GET_INVITEES,
  invitees
})

// export const fetchInvitees = (id) => {
//   return async dispatch => {
//     try {
//       const {data} = await axios.get(`/api/events/invite/${id}`)
//       dispatch(getInvitees(data))

//     }
//     catch(err) {
//       console.log(err)
//     }
//   }
// }

export const createInvitee = invitee => {
  return async dispatch => {
    try {
      const {data} = await axios.post(`/api/events/invite`, invitee)
      dispatch(addInvitee(data))
    } catch (err) {
      console.log(err)
    }
  }
}
export const sendEmail = email => {
  const obj = {
    email: email
  }
  return dispatch => {
    try {
      return axios.put(`/api/events/sent/invate`, obj)
    } catch (err) {
      console.log(err)
    }
  }
}

export const fetchEvent = id => {
  return async dispatch => {
    try {
      const {data} = await axios(`/api/events/${id}`)
      dispatch(getEvent(data))
    } catch (err) {
      console.log(err)
    }
  }
}
export const createEvent = event => {
  return async dispatch => {
    try {
      const {data} = await axios.post('/api/events/add', event)
      dispatch(getEvent(data))
      history.push(`/events/${data.id}`)
    } catch (err) {
      console.log('ERROR', err)
    }
  }
}

const initialState = {
  events: [],
  currEvent: {},
  invitees: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ONE_EVENT: {
      return {...state, currEvent: action.event}
    }
    case ADD_EVENT: {
      return {...state, currEvent: action.event}
    }
    case ADD_INVITEE: {
      return {...state, invitees: action.invitees}
    }
    case GET_INVITEES: {
      return {...state, invitees: state.invitees}
    }
    default:
      return state
  }
}
