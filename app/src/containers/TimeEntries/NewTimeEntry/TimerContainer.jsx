import React, { Component } from 'react'
import { connect } from 'react-redux'
import { resetCurrentTimeEntry } from '../actions'
import Timer from './Timer.jsx'
import TimerButton from './TimerButton.jsx'

class TimerContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isRunning: false,
      duration: '00:00:00'
    }

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick() {
    this.setState({
      isRunning: !this.state.isRunning,
    }, () => {
      if (this.state.isRunning === false) {
        this.props.onStopClick()
        this.props.resetCurrentTimeEntry(null)
      }
    })
  }

  handleChange(duration) {
    this.props.onTimeChange(duration)
  }

  render() {
    return (
      <div className="new-time-entry-timer valign-center">
        <div className="new-time-entry-duration">
          <Timer isRunning={this.state.isRunning} onChange={this.handleChange}/>
        </div>
        <TimerButton onClick={this.handleClick}/>
      </div>
    )
  }
}

export default connect(null, { resetCurrentTimeEntry })(TimerContainer)