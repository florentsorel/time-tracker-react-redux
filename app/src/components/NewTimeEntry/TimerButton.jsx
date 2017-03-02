import React, { Component } from 'react'
import classNames from 'classnames'

class TimerButton extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isStarted: false,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { onStop, onPlay } = this.props
    this.setState({
      isStarted: !this.state.isStarted,
    }, () => {
      if (this.state.isStarted === false) {
        onStop()
      }
      else {
        onPlay()
      }
    })
  }

  render() {
    return (
      <button className="btn-icon" onClick={this.handleClick}>
        <i className={classNames({
          'new-time-entry-play-icon': true,
          'fa': true,
          'fa-play-circle': this.state.isStarted === false,
          'fa-stop-circle': this.state.isStarted === true,
          'is-started': this.state.isStarted === true,
        })}>
        </i>
      </button>
    )
  }

}

export default TimerButton