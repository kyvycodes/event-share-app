import axios from 'axios'

const ADD_OPTION = 'ADD_OPTION'

const initialState = {
  option: {}
}

const addOption = option => ({type: ADD_OPTION, option})

export const setOption = optionObj => async dispatch => {
  try {
    const res = await axios.post(`/api/poll/`, optionObj)
    dispatch(addOption(res.data))
  } catch (err) {
    dispatch(gotErrorTask(err.response.data))
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_OPTION:
      return {...state, option: action.option}
    default:
      return state
  }
}
