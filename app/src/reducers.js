import { combineReducers } from 'redux'
import { timeEntries, currentTimeEntry, currentTextEntry, timerStatus } from 'containers/TimeEntries/reducer'
import projects from 'containers/ProjectsContainer/reducer'

const rootReducer = combineReducers({
  currentTimeEntry,
  currentTextEntry,
  timerStatus,
  timeEntries,
  projects
})

export default rootReducer