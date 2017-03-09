import * as projectsSelector from './projects'
import * as currentTimeEntry from './currentTimeEntry'

// Projects selector
export const getProjectById = (state, projectId) => projectsSelector.getProjectById(state, projectId)

// Current time entry selector
export const getDuration = (state) => currentTimeEntry.getDuration(state)