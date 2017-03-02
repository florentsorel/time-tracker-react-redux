import { ADD_TIME_ENTRY } from 'containers/TimeEntriesContainer/constants'

export function addEntryAction(text) {
  return { type: ADD_TIME_ENTRY, text }
}