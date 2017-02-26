import { combineReducers } from 'redux'
import timeEntries from 'containers/TimeEntriesContainer/reducer'
import projects from 'containers/ProjectsContainer/reducer'

const rootReducer = combineReducers({
  timeEntries,
  projects
})

export default rootReducer