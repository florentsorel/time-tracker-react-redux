import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleTimerStatus  } from '../actions'
import classNames from 'classnames'

class TimerButton extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isStarted: this.props.isStarted,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      isStarted: !this.state.isStarted,
    })

    this.props.onClick()
    this.props.toggleStatus(this.state.isStarted)
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

export default connect((state) => ({ isStarted: state.currentTimeEntry.isRunning }), { toggleStatus: toggleTimerStatus })(TimerButton)