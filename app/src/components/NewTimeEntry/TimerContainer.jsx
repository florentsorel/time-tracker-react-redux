import React, { Component } from 'react'
import Timer from './Timer.jsx'
import TimerButton from './TimerButton.jsx'

class TimerContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isRunning: false,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      isRunning: !this.state.isRunning,
    }, () => {
      if (this.state.isRunning === false) {
        this.props.onStopClick()
      }
    })
  }

  render() {
    return (
      <div className="new-time-entry-timer valign-center">
        <div className="new-time-entry-duration">
          <Timer isRunning={this.state.isRunning} />
        </div>
        <TimerButton onClick={this.handleClick}/>
      </div>
    )
  }
}

export default TimerContainer