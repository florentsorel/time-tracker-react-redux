import { ADD_TIME_ENTRY } from '../constants/timeEntries'

const initialState = [
  {
    id: 1,
    date: '2016-01-01',
    startTime: '10:02',
    endTime: '11:08',
    text: 'Modification de la fonction render',
    projectId: 1,
  },
  {
    id: 2,
    date: '2016-01-01',
    startTime: '10:02',
    endTime: '11:08',
    text: 'Modification la fonction connect',
    projectId: 2,
  }
]

export default function timeEntries(state = initialState, action) {
  switch (action.type) {
    case ADD_TIME_ENTRY:
      return [
        {
          id: state.reduce((maxId, timeEntry) => Math.max(timeEntry.id, maxId), -1) + 1,
          date: action.date,
          stateTime: action.stateTime,
          endTime: action.endTime,
        },
        ...state
      ]
    default:
      return state
  }
}