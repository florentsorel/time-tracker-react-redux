import React, { PropTypes } from 'react'

const InputTextTimeEntry = ({ value, onBlur }) => (
  <input type="text" defaultValue={value} onBlur={onBlur} />
)

InputTextTimeEntry .propTypes = {
  text: PropTypes.string
}

export default InputTextTimeEntry