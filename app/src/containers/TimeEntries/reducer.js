import { ADD_TIME_ENTRY, ADD_CURRENT_TIME, RESET_CURRENT_TIME, ADD_CURRENT_TEXT, TOGGLE_TIMER_STATUS } from './constants'

const initialState = [
  {
    id: 1,
    text: 'Modification de la fonction render',
    duration: "00:05:24",
    projectId: 1,
  },
  {
    id: 2,
    text: 'Modification la fonction connect',
    duration: "02:32:46",
    projectId: 2,
  }
]

export function timeEntries(state = initialState, action) {
  switch (action.type) {
    case ADD_TIME_ENTRY:
      return [
        {
          id: state.reduce((maxId, timeEntry) => Math.max(timeEntry.id, maxId), -1) + 1,
          text: action.text,
          duration: action.duration,
          projectId: null,
        },
        ...state
      ]
    default:
      return state
  }
}

export function currentTimeEntry(state = {
  text: null,
  duration: null,
  isRunning: false,
}, action) {
  switch (action.type) {
    case ADD_CURRENT_TIME:
    case RESET_CURRENT_TIME:
      return {...state, duration: action.duration }
    case ADD_CURRENT_TEXT:
      return {...state, text: action.text }
    case TOGGLE_TIMER_STATUS:
      return {...state, isRunning: !action.isRunning }
    default:
      return state
  }
}