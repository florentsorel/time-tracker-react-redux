import React, { PropTypes } from 'react'

const TimeEntry = ({
  entry,
  project
}) => {
  return (
    <div className="time-entry">
      <div className="text">
        {entry.text}
      </div>
      {
        project &&
          <div className="project">
            {project.name}
          </div>
      }
    </div>
  )
}

TimeEntry.propTypes = {
  entry: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  }),
  project: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
}

export default TimeEntry