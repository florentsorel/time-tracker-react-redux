import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import TimeEntryContainer from './TimeEntryContainer.jsx'

const TimeEntriesContainer = ({
  timeEntries
}) => {
  return (
    <ul className="time-entries-list">
      {timeEntries.map(timeEntry =>
        <TimeEntryContainer
          key={timeEntry.id}
          entry={timeEntry} />
      )}
    </ul>
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