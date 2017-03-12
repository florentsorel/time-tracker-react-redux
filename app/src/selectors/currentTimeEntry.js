import moment from 'moment'

export const getDuration = (state) => {
  const startTime = state.currentTimeEntry.startTime
  const endTime = state.currentTimeEntry.endTime

  return moment.duration(endTime.diff(startTime));
}