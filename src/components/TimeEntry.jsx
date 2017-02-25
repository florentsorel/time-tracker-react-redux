import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

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
    id:  React.PropTypes.number,
    text: React.PropTypes.string
  }),
}

const mapStateToProps = (state, ownProps) => {
  const project = state.projects.find(item => {
    return item.id === ownProps.entry.projectId
  });

  return {
    project
  }
}

const Container = connect(
  mapStateToProps
)(TimeEntry);

export default Container