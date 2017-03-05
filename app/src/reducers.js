import { combineReducers } from 'redux'
import { timeEntries, currentTimeEntry } from 'containers/TimeEntries/reducer'
import projects from 'containers/ProjectsContainer/reducer'

const rootReducer = combineReducers({
  currentTimeEntry,
  timeEntries,
  projects
})

export default rootReducer