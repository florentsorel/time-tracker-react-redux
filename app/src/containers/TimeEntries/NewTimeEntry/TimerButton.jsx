import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

const TimerButton = (props) => (
    <button className="btn-icon" onClick={props.onClick}>
      <i className={classNames({
        'new-time-entry-play-icon': true,
        'fa': true,
        'fa-play-circle': props.isRunning === false,
        'fa-stop-circle': props.isRunning === true,
        'is-started': props.isRunning === true,
      })}>
      </i>
    </button>
)

export default connect((state) => ({ isRunning: state.currentTimeEntry.isRunning }))(TimerButton)