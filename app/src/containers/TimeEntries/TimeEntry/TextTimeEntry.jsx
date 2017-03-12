import React, { Component, PropTypes } from 'react'
import InputTextTimeEntry from './InputTextTimeEntry'
import classNames from 'classnames'


class TextTimeEntry extends Component {

  state = {
    edit: false,
    textWidth: 160,
    newValue: null,
  }

  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleClick() {
    this.setState({
      edit: true,
      textWidth: this.refs.text.offsetWidth,
    })
  }

  handleBlur() {
    this.setState({
      edit: false
    })

    const newValue = this.state.newValue != null ? this.state.newValue : this.props.text

    this.props.onEditText(this.props.entryId, newValue)
  }

  render() {
    const { text } = this.props

    if (this.state.edit === true) {
      return <InputTextTimeEntry
        value={text}
        width={this.state.textWidth}
        onChange={(value) => this.setState({newValue: value})}
        onBlur={this.handleBlur} />
    }

    return (
      <div
        ref="text"
        className={classNames({
          'time-entry-text': true,
          'mod-empty': text === null
        })}
        data-placeholder="Add task description"
        onClick={this.handleClick} >
        {text}
      </div>
    )
  }
}

TextTimeEntry.propTypes = {
  text: PropTypes.string
}

export default TextTimeEntry