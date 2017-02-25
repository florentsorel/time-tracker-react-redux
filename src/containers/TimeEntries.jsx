import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import TimeEntryContainer from './TimeEntryContainer.jsx'

const TimeEntriesList = ({
  timeEntries
}) => {
  return (
    <div>
      {timeEntries.map(timeEntry =>
        <TimeEntryContainer
          key={timeEntry.id}
          entry={timeEntry} />
      )}
    </div>
  )
}

TimeEntriesList.propTypes = {
  timeEntries: PropTypes.array.isRequired
}

const mapStateToProps = ({ timeEntries }) => ({
  timeEntries
})

const TimeEntries = connect(
  mapStateToProps
)(TimeEntriesList)

export default TimeEntries