import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTimeEntry  } from './actions'
import NewTimeEntry from 'components/NewTimeEntry'

const NewTimeEntryContainer = ({ addTimeEntry }) => (
  <NewTimeEntry onStopClick={addTimeEntry} />
)

const mapDispatchToProps = (dispatch) => {
  return {
    addTimeEntry: (value, duration) => {
      dispatch(addTimeEntry(value, duration))
    }
  }
}

export default connect(null, mapDispatchToProps)(NewTimeEntryContainer)