import React, { Component, PropTypes } from 'react'
import InputTextTimeEntry from './InputTextTimeEntry'
import classNames from 'classnames'


class TextTimeEntry extends Component {

  state = {
    edit: false,
  }

  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleClick() {
    this.setState({
      edit: true,
    })
  }

  handleBlur() {
    this.setState({
      edit: false
    })
  }

  render() {
    const { text } = this.props

    if (this.state.edit === true) {
      return <InputTextTimeEntry value={text} onBlur={this.handleBlur}/>
    }

    return (
      <div
        className={classNames({
          'time-entry-text': true,
          'mod-empty': text === null
        })}
         data-placeholder="Add task description"
         onClick={this.handleClick}>
        {text}
      </div>
    )
  }
}

TextTimeEntry.propTypes = {
  text: PropTypes.string
}

export default TextTimeEntry