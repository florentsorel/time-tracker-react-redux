import React from 'react'
import TimeEntryInput from './TimeEntryInput.jsx'
import Timer from './Timer.jsx'

const NewTimeEntry = () => (
  <div className="new-time-entry">
    <TimeEntryInput />
    <Timer />

  </div>
)

export default NewTimeEntry