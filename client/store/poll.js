import axios from 'axios'
import history from '../history'

const GET_POLL = 'GET_POLL'
const GET_ALL_POLLS = 'GET_ALL_POLLS'

const initialState = {
  poll: {},
  polls: []
}

const fetchPoll = poll => ({type: GET_POLL, poll})
const getAllPolls = polls => ({type: GET_ALL_POLLS, polls})

export const getPoll = id => async dispatch => {
  try {
    const res = await axios.get(`/api/poll/${id}`)
    dispatch(fetchPoll(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const createPoll = poll => async dispatch => {
  try {
    const res = await axios.post(`/api/poll/create`, poll)
    dispatch(fetchPoll(res.data))
    history.push(`/events/${poll.eventId}/polls/${res.data.id}`)
  } catch (err) {
    console.error(err)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POLL:
      return {...state, poll: action.poll}
    case GET_ALL_POLLS:
      return {...state, polls: action.polls}
    default:
      return state
  }
}
