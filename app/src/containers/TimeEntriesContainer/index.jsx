import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import TimeEntryContainer from './TimeEntryContainer.jsx'
import NewTimeEntryContainer from 'containers/NewTimeEntryContainer'

const TimeEntriesContainer = ({
  timeEntries
}) => {
  return (
    <div>
      <NewTimeEntryContainer />
      <ul className="time-entries-list">
        {timeEntries.map(timeEntry =>
          <TimeEntryContainer
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