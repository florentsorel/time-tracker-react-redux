import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import TimeEntry from './TimeEntry'
import NewTimeEntry from './NewTimeEntry'

const TimeEntriesContainer = ({
  timeEntries
}) => {
  return (
    <div>
      <NewTimeEntry />
      <ul className="time-entries-list">
        {timeEntries.map(timeEntry =>
          <TimeEntry
            key={timeEntry.id}
            entry={timeEntry} />
        )}
      </ul>
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