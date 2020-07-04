import axios from 'axios'

const GET_EVENT_TASKS = 'GET_EVENT_TASKS'
const GET_TASK = 'GET_TASK'
const ADD_TASK = 'ADD_TASK'
const EDIT_TASK = 'EDIT_TASK'
const DELETE_TASK = 'DELETE_TASK'

const initialState = {
  singleTask: {},
  multipleTasks: []
}

const fetchSingleTask = task => ({type: GET_TASK, task})
const fetchAllTaskEvent = tasks => ({type: GET_EVENT_TASKS, tasks})
const addTask = task => ({type: ADD_TASK, task})
const editedTask = task => ({type: EDIT_TASK, task})
const deleteTask = task => ({type: DELETE_TASK, task})

export const getSingleTask = id => async dispatch => {
  try {
    const res = await axios.get(`/api/tasks/${id}`)
    dispatch(fetchSingleTask(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const getAllTasksForAnEvent = eventId => async dispatch => {
  try {
    const res = await axios.get(`/api/tasks/${eventId}`)
    dispatch(fetchAllTaskEvent(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const updateTask = (taskObj, id) => async dispatch => {
  try {
    const res = await axios.put(`/api/tasks/${id}`, taskObj)
    const taskUpdated = fetchSingleTask(res.data)
    dispatch(editedTask(taskUpdated))
  } catch (err) {
    console.error(err)
  }
}

export const setTask = taskObj => async dispatch => {
  console.log(' 2  OUTPUT: taskObj', taskObj)
  try {
    const res = await axios.post(`/api/tasks/`, taskObj)
    dispatch(addTask(res.data))
  } catch (err) {
    console.error(err)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TASK:
      return {...state, task: action.task}
    case GET_EVENT_TASKS:
      return {...state, tasks: action.tasks}
    case ADD_TASK:
      return {...state, task: action.task}
    case EDIT_TASK:
      return {...state, task: action.task}
    default:
      return state
  }
}
