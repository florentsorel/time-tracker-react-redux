import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import TimeEntry from './TimeEntry'
import NewTimeEntry from './NewTimeEntry'

const TimeEntries = ({
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

TimeEntries.propTypes = {
  timeEntries: PropTypes.array.isRequired
}

const mapStateToProps = ({ timeEntries }) => ({
  timeEntries
})

export default connect(
  mapStateToProps
)(TimeEntries)