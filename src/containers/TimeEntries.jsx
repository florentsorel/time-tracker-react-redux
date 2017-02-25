import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import TimeEntry from '../components/TimeEntry.jsx'

const TimeEntriesList = ({
  timeEntries
}) => {
  return (
    <div>
      {timeEntries.map(timeEntry =>
        <TimeEntry
          key={timeEntry.id}
          {...timeEntry}/>
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