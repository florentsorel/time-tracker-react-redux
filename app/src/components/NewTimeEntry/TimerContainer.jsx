import React, { Component } from 'react'
import Timer from './Timer.jsx'
import TimerButton from './TimerButton.jsx'

class TimerContainer extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="new-time-entry-timer valign-center">
        <div className="new-time-entry-duration">
          <Timer />
        </div>
        <TimerButton onStop={this.props.onStop} onPlay={this.props.onPlay}/>
      </div>
    )
  }
}

export default TimerContainer