import moment from 'moment'

export const getDuration = (state) => {
  const startTime = moment(state.currentTimeEntry.startTime)
  const endTime = moment(state.currentTimeEntry.endTime)

  return moment.duration(endTime.diff(startTime));
}