import React, { Component } from 'redux'
import { connect } from 'react-redux'
import TimeEntriesList from '../components/TimeEntriesList.jsx'

const mapStateToProps = ({ timeEntries }) => ({
  timeEntries
})

const TimeEntries = connect(
  mapStateToProps
)(TimeEntriesList)

export default TimeEntries