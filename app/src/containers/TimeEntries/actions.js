import { ADD_TIME_ENTRY, UPDATE_TEXT_ENTRY, RESET_CURRENT_TIME, ADD_CURRENT_TEXT, START_TIMER, STOP_TIMER } from 'containers/TimeEntries/constants'
import { getDuration } from 'selectors'

export const addTimeEntry = text => (dispatch, getState) => {

  const duration = getDuration(getState())

  return dispatch({
    type: ADD_TIME_ENTRY,
    text,
    duration
  })
}

export const resetCurrentTimeEntry = () => ({
  type: RESET_CURRENT_TIME
})

export const addCurrentTextEntry = (text) => {

  if (text.length === 0) text = null

  return {
    type: ADD_CURRENT_TEXT,
    text
  }
}

export const stopTimer = (endTime) => ({
  type: STOP_TIMER,
  endTime
})

export const startTimer = (startTime) => ({
  type: START_TIMER,
  startTime
})

export const onEditText = (id, text) => ({
  type: UPDATE_TEXT_ENTRY,
  id,
  text: text != '' ? text : null
})