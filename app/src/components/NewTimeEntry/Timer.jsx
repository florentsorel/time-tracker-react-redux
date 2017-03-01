import React from 'react'
import TimerButton from './TimerButton.jsx'

const Timer = () => (
  <div className="new-time-entry-timer valign-center">
    <div className="new-time-entry-duration">
      0:00:00
    </div>
    <TimerButton />
  </div>
)

export default Timer