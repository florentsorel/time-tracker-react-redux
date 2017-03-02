import { ADD_TIME_ENTRY } from 'containers/TimeEntriesContainer/constants'

export const addTimeEntry = (text) => ({
  type: ADD_TIME_ENTRY,
  text
})