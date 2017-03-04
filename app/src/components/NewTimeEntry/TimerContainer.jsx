import React, { Component } from 'react'
import Timer from './Timer.jsx'
import TimerButton from './TimerButton.jsx'

class TimerContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isRunning: false,
    }

    this.handleStart = this.handleStart.bind(this)
    this.handleStop = this.handleStop.bind(this)
  }

  handleStart() {
    this.setState({
      isRunning: true,
    })
  }

  handleStop() {
    this.setState({
      isRunning: false
    })

    this.props.onStop()
  }

  render() {
    return (
      <div className="new-time-entry-timer valign-center">
        <div className="new-time-entry-duration">
          <Timer isRunning={this.state.isRunning} />
        </div>
        <TimerButton onStop={this.handleStop} onStart={this.handleStart}/>
      </div>
    )
  }
}

export default TimerContainer