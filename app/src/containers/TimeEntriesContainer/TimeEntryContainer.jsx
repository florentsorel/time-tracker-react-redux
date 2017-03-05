import React  from 'react'
import { connect } from 'react-redux'
import { getProjectById } from 'selectors'
import TimeEntry from 'components/TimeEntry'

const mapStateToProps = (state, ownProps) => {
  return {
    project: getProjectById(state, ownProps.entry.projectId)
  }
}

export default connect(mapStateToProps)(TimeEntry)