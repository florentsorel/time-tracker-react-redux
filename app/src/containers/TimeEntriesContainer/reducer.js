import { ADD_TIME_ENTRY } from './constants'

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

export default function timeEntries(state = initialState, action) {
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