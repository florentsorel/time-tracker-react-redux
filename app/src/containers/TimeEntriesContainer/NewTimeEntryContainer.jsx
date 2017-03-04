import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTimeEntry  } from './actions'
import NewTimeEntry from 'components/NewTimeEntry'

const NewTimeEntryContainer = ({ addTimeEntry }) => (
  <NewTimeEntry onStop={addTimeEntry} />
)

export default connect(null, { addTimeEntry })(NewTimeEntryContainer)