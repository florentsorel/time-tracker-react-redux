import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTimeEntry, addCurrentTextEntry  } from '../actions'
import TimeEntryInput from './TimeEntryInput.jsx'
import TimerContainer from './TimerContainer.jsx'

class NewTimeEntry extends Component {

  constructor(props) {
    super(props)

    // @todo convertir la durée en seconde écoulé
    this.state = {
      value: '',
      duration: '00:00:00'
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({value: value})
    this.props.onInputChange(value)
  }

  render() {
    return (
      <div className="new-time-entry">
        <TimeEntryInput
          onChange={this.handleChange} value={this.props.value} />
        <TimerContainer
          onStopClick={() => this.props.onStopClick(this.props.value, this.state.duration)}
          onTimeChange={(value) => this.setState({duration: value})} />
      </div>
    )
  }

}

const props = (state) => ({ value: state.currentTimeEntry.text })
const actions = {onStopClick: addTimeEntry, onInputChange: addCurrentTextEntry}
export default connect(props, actions)(NewTimeEntry);