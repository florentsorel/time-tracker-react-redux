import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {

  render() {

    return (
      <div>
        {this.props.timeEntries.map(timeEntry =>
          <div key={timeEntry.id}>{timeEntry.text}</div>
        )}
      </div>
    )
  }
}

export default connect(state => ({
  timeEntries: state.timeEntries
}))(App)