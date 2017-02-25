import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getProjectById } from '../selectors'
import TimeEntry from '../components/TimeEntry.jsx'

const TimeEntryContainer = ({
  entry,
  project
}) => (
  <TimeEntry
    entry={entry}
    project={project}
  />
)

TimeEntryContainer.propTypes = {
  entry: PropTypes.shape({
    id:  PropTypes.number.isRequired,
    text: PropTypes.string,
    projectId: PropTypes.number
  })
}

const mapStateToProps = (state, ownProps) => {
  return {
    project: getProjectById(state, ownProps.entry.projectId)
  }
}

const Container = connect(
  mapStateToProps
)(TimeEntryContainer);

export default Container