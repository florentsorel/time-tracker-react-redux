const initialState = [
  {
    id: 1,
    name: 'React'
  },
  {
    id: 2,
    name: 'Redux'
  },
]

export default function projects(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}