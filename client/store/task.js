import axios from 'axios'

const GET_EVENT_TASKS = 'GET_EVENT_TASKS'
const GET_TASK = 'GET_TASK'
const ADD_TASK = 'ADD_TASK'
const EDIT_TASK = 'EDIT_TASK'
const DELETE_TASK = 'DELETE_TASK'
const GET_ERRORS = 'GET_ERRORS'
const CLEAR_ERRORS = 'CLEAR_ERRORS'

const initialState = {
  singleTask: {},
  multipleTasks: [],
  errorsTask: {}
}

const fetchSingleTask = task => ({type: GET_TASK, task})
const fetchAllTaskEvent = tasks => ({type: GET_EVENT_TASKS, tasks})
const addTask = task => ({type: ADD_TASK, task})
const editedTask = task => ({type: EDIT_TASK, task})
const gotErrorTask = errorsTask => ({type: GET_ERRORS, errorsTask})
const deleteTask = taskId => ({type: DELETE_TASK, taskId})

export const getSingleTask = id => async dispatch => {
  try {
    const res = await axios.get(`/api/tasks/${id}`)
    dispatch(fetchSingleTask(res.data))
  } catch (err) {
    console.error(err)
  }
}

export const getAllTasksForAnEvent = id => async dispatch => {
  try {
    const res = await axios.get(`/api/tasks/${id}`)
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
  try {
    const res = await axios.post(`/api/tasks/`, taskObj)
    dispatch(addTask(res.data))
  } catch (err) {
    dispatch(gotErrorTask(err.response.data))
  }
}

export const addTaskToUser = (taskObj, id) => async dispatch => {
  try {
    const res = await axios.put(`/api/tasks/${id}`, taskObj)
    dispatch(fetchAllTaskEvent(res.data))
  } catch (err) {
    dispatch(gotErrorTask(err.response.data))
  }
}

export const deleteTaskThunk = taskID => async dispatch => {
  try {
    await axios.delete(`/api/tasks/${taskID}`)
    dispatch(deleteTask(taskID))
    history.push(`/taskList`)
  } catch (error) {
    console.error('Failed to DELETE')
  }
}
export const editTaskThunk = (taskId, task) => async dispatch => {
  console.log('THUNK', taskId)
  try {
    const res = await axios.put(`/api/tasks/${taskId}`, task)
    dispatch(editTask(res.data))
    history.push(`/tasks/${taskId}`)
  } catch (error) {
    console.error(error)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TASK:
      return {...state, task: action.task}
    case GET_EVENT_TASKS:
      return {...state, tasks: action.tasks}
    case ADD_TASK:
      return {...state, task: action.task, errorsTask: {}}
    case EDIT_TASK:
      return {...state, task: action.task}
    case GET_ERRORS:
      const errObj = {}
      let errors = action.errorsTask.split(',')
      errors.map(err => {
        err = err.substring(18)
        if (err.includes('Title')) {
          errObj.title = err
        }
        if (err.includes('Category')) {
          errObj.category = err
        }
      })
      return {...state, errorsTask: errObj}
    case CLEAR_ERRORS:
      return {}
    case DELETE_TASK:
      return [
        ...state,
        initialState.multipleTasks.filter(id => id !== action.taskID)
      ]
    // case EDIT_TASK:
    //   return {...state, singleTask: action.task}

    default:
      return state
  }
}
