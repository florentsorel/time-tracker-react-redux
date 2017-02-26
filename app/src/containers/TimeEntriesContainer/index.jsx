import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import TimeEntryContainer from './TimeEntryContainer.jsx'

const TimeEntriesContainer = ({
  timeEntries
}) => {
  return (
    <div className="container">
      {timeEntries.map(timeEntry =>
        <TimeEntryContainer
          key={timeEntry.id}
          entry={timeEntry} />
      )}
    </div>
  )
}

TimeEntriesContainer.propTypes = {
  timeEntries: PropTypes.array.isRequired
}

const mapStateToProps = ({ timeEntries }) => ({
  timeEntries
})

const TimeEntries = connect(
  mapStateToProps
)(TimeEntriesContainer)

export default TimeEntries