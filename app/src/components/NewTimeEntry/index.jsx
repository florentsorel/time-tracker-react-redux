import React, { Component } from 'react'
import TimeEntryInput from './TimeEntryInput.jsx'
import TimerContainer from './TimerContainer.jsx'

class NewTimeEntry extends Component {

  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({value: value})
  }

  render() {
    return (
      <div className="new-time-entry">
        <TimeEntryInput onChange={this.handleChange} />
        <TimerContainer onStopClick={() => this.props.onStopClick(this.state.value, '00:15:08')} />
      </div>
    )
  }

}

export default NewTimeEntry