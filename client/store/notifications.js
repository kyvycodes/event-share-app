import axios from 'axios'

const GET_SUGGESTIONS = 'GET_SUGGESTIONS'
const DELETE_SUGGESTION = 'DELETE_SUGGESTION'
const RESET_NOTIFICATIONS = 'RESET_NOTIFICATIONS'

const initialState = {
  suggestions: [],
  polls: []
}

const fetchAllNotifications = suggestions => ({
  type: GET_SUGGESTIONS,
  suggestions
})
const fetchDeleteSuggestion = id => ({type: DELETE_SUGGESTION, id})
export const resetAllNotifications = () => ({type: RESET_NOTIFICATIONS})

export const getAllNotifications = userPartiesObj => async dispatch => {
  try {
    const res = await axios.put(`/api/notifications/`, userPartiesObj)
    dispatch(fetchAllNotifications(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const deletelNotification = id => async dispatch => {
  try {
    await axios.delete(`/api/notifications/${id}`)
    dispatch(fetchDeleteSuggestion(id))
  } catch (err) {
    console.error(err)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SUGGESTIONS:
      return {...state, suggestions: [...action.suggestions]}
    case RESET_NOTIFICATIONS:
      return {...state, suggestions: []}
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
