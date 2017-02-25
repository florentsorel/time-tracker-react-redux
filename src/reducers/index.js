import { combineReducers } from 'redux'
import timeEntries from './timeEntries'
import projects from './projects'

const rootReducer = combineReducers({
  timeEntries,
  projects
})

export default rootReducer