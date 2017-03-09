import React, { Component } from 'react'
import { connect } from 'react-redux'
import { resetCurrentTimeEntry, stopTimer, startTimer } from '../actions'
import Timer from './Timer.jsx'
import TimerButton from './TimerButton.jsx'

class TimerContainer extends Component {

  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const props = this.props
    if (props.isRunning === true) {
      props.stopTimer(new Date())
      props.onStopClick()
      props.resetCurrentTimeEntry()
    }
    else {
      props.startTimer(new Date())
    }
  }

  render() {
    const { isRunning } = this.props
    return (
      <div className="new-time-entry-timer valign-center">
        <div className="new-time-entry-duration">
          <Timer isRunning={isRunning} />
        </div>
        <TimerButton onClick={this.handleClick}/>
      </div>
    )
  }
}

export default connect((state) => ({ isRunning: state.currentTimeEntry.isRunning}), { resetCurrentTimeEntry, stopTimer, startTimer })(TimerContainer)