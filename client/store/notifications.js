import axios from 'axios'

const GET_SUGGESTIONS = 'GET_SUGGESTIONS'
const DELETE_SUGGESTION = 'DELETE_SUGGESTION'

const initialState = {
  suggestions: [],
  poll: []
}

const fetchAllNotifications = suggestions => ({
  type: GET_SUGGESTIONS,
  suggestions
})
const fetchDeleteSuggestion = id => ({type: DELETE_SUGGESTION, id})

export const getAllNotifications = id => async dispatch => {
  try {
    const res = await axios.get(`/api/notifications/${id}`)
    dispatch(fetchAllNotifications(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const deletelNotification = id => async dispatch => {
  try {
    const res = await axios.delete(`/api/notifications/${id}`)
    dispatch(fetchDeleteSuggestion(id))
  } catch (err) {
    console.error(err)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SUGGESTIONS:
      return {...state, suggestions: [...action.suggestions]}
    case DELETE_SUGGESTION:
      return {
        ...state,
        suggestions: [
          ...state.suggestions.filter(suggestion => suggestion.id !== action.id)
        ]
      }
    default:
      return state
  }
}
