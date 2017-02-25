import React, { PropTypes } from 'react'

const TimeEntry = ({
  text
}) => {
  return (
    <div className="time-entry">
      {text}
    </div>
  )
}

TimeEntry.propTypes = {
  text: PropTypes.string
}

export default TimeEntry