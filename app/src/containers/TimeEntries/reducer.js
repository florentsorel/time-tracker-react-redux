import { ADD_TIME_ENTRY, UPDATE_TEXT_ENTRY, RESET_CURRENT_TIME, ADD_CURRENT_TEXT, START_TIMER, STOP_TIMER } from './constants'

const initialState = [
  {
    id: 1,
    text: 'Mise en place d\'un input qui remplace la div contenant la description',
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

const timeEntry = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_TEXT_ENTRY:
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        text: action.text
      }

    default:
      return state
  }
}

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
    case UPDATE_TEXT_ENTRY:
      return state.map(t => timeEntry(t, action))
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