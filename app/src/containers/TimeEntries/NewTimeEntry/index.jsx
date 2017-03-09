import React from 'react'
import { connect } from 'react-redux'
import { addTimeEntry, addCurrentTextEntry  } from '../actions'
import TimeEntryInput from './TimeEntryInput.jsx'
import TimerContainer from './TimerContainer.jsx'

const NewTimeEntry = (props) => (
    <div className="new-time-entry">
      <TimeEntryInput
        onChange={(value) => props.onInputChange(value)} value={props.value} />
      <TimerContainer
        onStopClick={() => props.onStopClick(props.value)} />
    </div>
)

const props = (state) => ({ value: state.currentTimeEntry.text })
const actions = { onStopClick: addTimeEntry, onInputChange: addCurrentTextEntry }
export default connect(props, actions)(NewTimeEntry);