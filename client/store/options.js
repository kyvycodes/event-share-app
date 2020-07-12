import axios from 'axios'

export const ADD_OPTION = 'ADD_OPTION'

const initialState = {
  option: {}
}

export const addOption = option => ({
  type: ADD_OPTION,
  option
})

export const setOption = option => async dispatch => {
  const {data} = await axios.post(`/api/poll/`, option)
  console.log('res****', data)
  dispatch(addOption(data))
}

export default function(state = initialState, action) {
  console.log('actionnnnnn', action)
  //action is undefined ???
  switch (action.type) {
    case ADD_OPTION:
      return {...state, option: action.option}
    default:
      return state
  }
}
