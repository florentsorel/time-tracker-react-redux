import React from 'react'
import TimeEntryInput from './TimeEntryInput.jsx'
import TimerContainer from './TimerContainer.jsx'

const NewTimeEntry = ({ onStop }) => (
  <div className="new-time-entry">
    <TimeEntryInput />
    <TimerContainer onStop={() => console.log('stop')} onPlay={() => console.log('play')} />
  </div>
)

export default NewTimeEntry