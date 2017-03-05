import React from 'react'

const TimeEntryInput = (props) => (
  <input type="text"
        className="new-time-entry-input"
        placeholder="What are you working on?"
        defaultValue={props.value}
        onChange={(e) => props.onChange(e.target.value)} />
)

export default TimeEntryInput