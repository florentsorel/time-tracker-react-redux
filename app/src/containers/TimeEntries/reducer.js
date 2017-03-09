import { ADD_TIME_ENTRY, RESET_CURRENT_TIME, ADD_CURRENT_TEXT, START_TIMER, STOP_TIMER } from './constants'

const initialState = [
  {
    id: 1,
    text: 'Modification de la fonction render',
    duration: 7675,
    projectId: 1,
  },
  {
    id: 2,
    text: 'Modification la fonction connect',
    duration: 3852,
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
  isRunning: false,
  startTime: null,
  endTime: null,
}, action) {
  switch (action.type) {
    case RESET_CURRENT_TIME:
      return {...state, startTime: null, endTime: null, text: null, isRunning: false }
    case ADD_CURRENT_TEXT:
      return {...state, text: action.text }
    case START_TIMER:
      return {...state, startTime: action.startTime, isRunning: true }
    case STOP_TIMER:
      return {...state, endTime: action.endTime, isRunning: false }
    default:
      return state
  }
}