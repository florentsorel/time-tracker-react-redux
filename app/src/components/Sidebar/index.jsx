import React, { PropTypes } from 'react'

const Sidebar = ({ className, children }) => (
  <div className={className}>
    {children}
  </div>
)

Sidebar.propTypes = {
  className: PropTypes.string.isRequired
}

Sidebar.defaultProps = {
  className: 'sidebar'
}

export default Sidebar