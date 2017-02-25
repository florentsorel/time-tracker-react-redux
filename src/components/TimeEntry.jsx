import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

const TimeEntry = ({
  id,
  text
}) => {
  return (
    <div className="time-entry">
      {text}
    </div>
  )
}

TimeEntry.propTypes = {
  id: PropTypes.number.isRequired,
  timeEntry: PropTypes.object.isRequired,
}

const Container = connect((state, ownProps) => {
  console.log(ownProps)
  return ({
    project: state.projects[state.entries[ownProps.entryId].projectId]
  })
})(TimeEntry);

export default Container