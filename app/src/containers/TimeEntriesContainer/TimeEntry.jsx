import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { getProjectById } from 'selectors'

const TimeEntry = ({
  entry,
  project
}) => {
  return (
    <li className="time-entry">
      <div className="time-entry-text">
        {entry.text}
      </div>
      {
        project &&
          <div className="time-entry-selected-project">
            <span style={{color: '#4BAA72'}}>
              <span className="time-entry-selected-project-color"></span>
              {project.name}
            </span>
          </div>
      }
      <div className="time-entry-duration-container">
        {entry.duration}
      </div>
    </li>
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

const mapStateToProps = (state, ownProps) => {
  return {
    project: getProjectById(state, ownProps.entry.projectId)
  }
}

export default connect(mapStateToProps)(TimeEntry)