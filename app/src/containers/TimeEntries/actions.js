import { ADD_TIME_ENTRY, ADD_CURRENT_TIME, ADD_CURRENT_TEXT, TOGGLE_TIMER_STATUS } from 'containers/TimeEntries/constants'

export const addTimeEntry = (text, duration) => ({
  type: ADD_TIME_ENTRY,
  text,
  duration
})

export const addCurrentTimeEntry = (duration) => ({
  type: ADD_CURRENT_TIME,
  duration
})

export const addCurrentTextEntry = (text) => ({
  type: ADD_CURRENT_TEXT,
  text
})

export const toggleTimerStatus = (status) => ({
  type: TOGGLE_TIMER_STATUS,
  status
})