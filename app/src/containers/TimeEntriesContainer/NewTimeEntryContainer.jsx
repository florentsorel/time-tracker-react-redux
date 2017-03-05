import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTimeEntry  } from './actions'
import NewTimeEntry from 'components/NewTimeEntry'

const actions = {onStopClick : addTimeEntry};
export default connect(null, actions)(NewTimeEntry);