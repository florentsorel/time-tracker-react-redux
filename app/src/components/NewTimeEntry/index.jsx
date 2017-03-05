import React, { Component } from 'react'
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
  }

  render() {
    return (
      <div className="new-time-entry">
        <TimeEntryInput
          onChange={(value) => this.setState({value: value})} />
        <TimerContainer
          onStopClick={() => this.props.onStopClick(this.state.value, this.state.duration)}
          onTimeChange={(value) => this.setState({duration: value})} />
      </div>
    )
  }

}

export default NewTimeEntry