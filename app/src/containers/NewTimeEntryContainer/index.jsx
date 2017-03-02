import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addEntryAction } from './actions'
import NewTimeEntry from 'components/NewTimeEntry'

class NewTimeEntryContainer extends Component {

  render() {
    return (
      <NewTimeEntry onStop={addEntryAction()} />
    )
  }

}

const Container = connect()(NewTimeEntryContainer)

export default Container