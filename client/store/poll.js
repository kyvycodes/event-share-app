import axios from 'axios'
import history from '../history'

const GET_POLL = 'GET_POLL'
const GET_ALL_POLLS = 'GET_ALL_POLLS'
const GET_EVENT_POLLS = 'GET_EVENT_POLLS'

const initialState = {
  poll: {},
  polls: []
}

const fetchPoll = poll => ({type: GET_POLL, poll})
const getAllPolls = polls => ({type: GET_ALL_POLLS, polls})
const fetchEventPolls = polls => ({type: GET_EVENT_POLLS, polls})

export const getPoll = id => async dispatch => {
  try {
    const res = await axios.get(`/api/poll/${id}`)
    dispatch(fetchPoll(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const getEventPolls = eventId => async dispatch => {
  try {
    const res = await axios.get(`/api/poll/${eventId}`)

    dispatch(fetchEventPolls(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const createAnswer = answerObj => async dispatch => {
  try {
    const res = await axios.post(`/api/poll/create/vote`, answerObj)
    dispatch(fetchEventPolls(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const createPoll = poll => async dispatch => {
  try {
    const res = await axios.post(`/api/poll/create`, poll)
    dispatch(fetchPoll(res.data))
    history.push(`/events/${poll.eventId}/polls`)
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
    case GET_EVENT_POLLS:
      const customePolls = []
      action.polls.map(poll => {
        let totalVotes = 0
        let usersAlreadyVoted = []
        poll.options.forEach(option => {
          totalVotes += option.answers.length
          option.answers.forEach(answer => {
            usersAlreadyVoted.push(answer.userId)
          })
        })
        const currentObj = {
          pollDetails: poll,
          totalVotes,
          usersAlreadyVoted
        }
        customePolls.push(currentObj)
      })
      return {...state, polls: customePolls}
    default:
      return state
  }
}
