import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { onEditText } from '../actions'
import { getProjectById } from 'selectors'
import moment from 'moment'
import * as duration from "moment-duration-format"
import TextTimeEntry from './TextTimeEntry'

const TimeEntry = ({
  entry,
  project,
  onEditText
}) => {
  return (
    <li className="time-entry">
      <TextTimeEntry
        text={entry.text}
        entryId={entry.id}
        onEditText={onEditText}/>
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
        {moment.duration(entry.duration, "seconds").format("HH:mm:ss", { trim: false })}
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

export default connect(
  mapStateToProps,
  { onEditText }
)(TimeEntry)