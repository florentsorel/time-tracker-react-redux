import React, { Component, PropTypes } from 'react'

class Timer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hours: this.props.hours,
      minutes: this.props.minutes,
      seconds: this.props.seconds
    }
  }

  componentDidMount() {
    if (this.props.isRunning) {
      this.run()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isRunning === this.props.isRunning) {
      return false;
    }

    if (nextProps.isRunning === false) {
      clearInterval(this.interval)
      this.update(0, 0, 0)
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
    let seconds = this.state.seconds;
    let minutes = this.state.minutes;
    let hours = this.state.hours;

    seconds = seconds + 1;

    if (seconds === 60) {
      seconds = 0;
      minutes = minutes + 1;
    }

    if (minutes === 60) {
      seconds = 0;
      minutes = 0;
      hours = hours + 1;
    }

    this.update(hours, seconds, minutes);
  }

  update(hours, seconds, minutes) {
    this.setState({
      hours: hours,
      seconds: seconds,
      minutes: minutes
    });

    this.props.onChange(this.renderTime())
  }

  zeroPad(value) {
    return value < 10 ? `0${value}` : value;
  }

  renderTime() {
    const {hours, minutes, seconds} = this.state
    return `${this.zeroPad(hours)}:${this.zeroPad(minutes)}:${this.zeroPad(seconds)}`
  }

  render() {
    return (
      <span>{this.renderTime()}</span>
    )
  }
}

Timer.propTypes = {
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
}

Timer.defaultProps = {
  hours: 0,
  minutes: 0,
  seconds: 0,
}

export default Timer