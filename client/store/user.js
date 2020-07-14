import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_USER = 'GET_USER'
const GET_USER_EVENT_HOST = 'GET_USER_EVENT_HOST'
const REMOVE_USER = 'REMOVE_USER'
const GET_USER_PAST_EVENT = 'GET_USER_PAST_EVENT'
/**
 * INITIAL STATE
 */
const defaultUser = {
  userParties: []
}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
const getUserParties = user => ({type: GET_USER_EVENT_HOST, user})
const removeUser = () => ({type: REMOVE_USER})
/**
 * THUNK CREATORS
 */

// export const updateUserEvents = (eventId, dec) => async dispatch => {
//   try {
//     const decision = {
//       decision: dec
//     }
//     const {data} = await axios.put(`/api/users/me/${eventId}`, decision)
//     dispatch(getUser(data))
//   } catch (err) {
//     console.error(err)
//   }
// }
export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}
export const getMe = () => async dispatch => {
  try {
    const res = await axios.get('/api/users/me')
    dispatch(getUser(res.data || defaultUser))
    dispatch(getUserParties(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const getMePast = () => async dispatch => {
  try {
    const res = await axios.get('/api/users/me/past')
    dispatch(getUser(res.data || defaultUser))
    dispatch(getUserParties(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (
  email,
  password,
  firstName,
  lastName,
  method,
  eventId
) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {
      email,
      password,
      firstName,
      lastName,
      eventId
    })
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    let historyUrl = '/home'
    if (eventId) {
      historyUrl = `/events/${eventId}/guests`
    }
    dispatch(getUser(res.data))
    localStorage.clear()
    history.push(`${historyUrl}`)
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    case GET_USER_EVENT_HOST: {
      const userParties = []
      action.user.events.map(event => {
        if (event.users_events.isOrganizer) {
          userParties.push(event.users_events.eventId)
        }
      })
      return {...state, userParties: userParties}
    }
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
