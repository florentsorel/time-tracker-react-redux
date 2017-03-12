import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import * as duration from "moment-duration-format"

class Timer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      seconds: this.props.seconds,
    }
  }

  componentDidMount() {
    if (this.props.isRunning) {
      const seconds = moment.duration(moment().diff(this.props.startTime)).asSeconds() | 0;

      this.update(seconds)

      this.run()
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isRunning === this.props.isRunning) {
      return false;
    }

    if (nextProps.isRunning === false) {
      clearInterval(this.interval)
      this.update(0)
    }
    else {
      this.run()
    }
  }

  run() {
    this.interval = setInterval(() => {
      this.tick()
    }, 1000);
  }

  tick() {
    let seconds = this.state.seconds

    seconds = seconds + 1;

    this.update(seconds);
  }

  update(seconds) {
    this.setState({
      seconds: seconds,
    });
  }

  render() {
    return (
      <span>{moment.duration(this.state.seconds, "seconds").format("HH:mm:ss", { trim: false })}</span>
    )
  }
}

Timer.propTypes = {
  seconds: PropTypes.number.isRequired,
}

Timer.defaultProps = {
  seconds: 0,
}

export default connect((state) => ({ startTime: state.currentTimeEntry.startTime}))(Timer)