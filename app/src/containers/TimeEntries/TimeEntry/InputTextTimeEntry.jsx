import React, { Component, PropTypes } from 'react'

class InputTextTimeEntry extends Component {

  componentDidMount() {
    this.input.focus()
  }

  render() {
    return (
      <input
        className="time-entry-text mod-input"
        ref={(input) => this.input = input}
        type="text" defaultValue={this.props.value}
        style={{width: this.props.width + 'px'}}
        onBlur={this.props.onBlur} />
    )
  }

}

InputTextTimeEntry .propTypes = {
  value: PropTypes.string,
  onBlur: PropTypes.func
}

export default InputTextTimeEntry