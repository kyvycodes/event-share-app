import axios from 'axios'

const GET_POLL = 'GET_POLL'

const initialState = {
  poll: {}
}

const fetchPoll = poll => ({type: GET_POLL, poll})

export const getPoll = id => async dispatch => {
  try {
    const res = await axios.get(`/api/poll/${id}`)
    dispatch(fetchPoll(res.data))
  } catch (err) {
    console.error(err)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POLL:
      return {...state, poll: action.poll}
    default:
      return state
  }
}
