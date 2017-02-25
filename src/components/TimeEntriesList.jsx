import React from 'react'
import TimeEntry from './TimeEntry.jsx'

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

export default TimeEntriesList