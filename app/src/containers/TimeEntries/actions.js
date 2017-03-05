import { ADD_TIME_ENTRY } from 'containers/TimeEntries/constants'

export const addTimeEntry = (text, duration) => ({
  type: ADD_TIME_ENTRY,
  text,
  duration
})