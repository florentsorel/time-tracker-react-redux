export const getProjectById = (state, projectId) => {
  return state.projects.find(item => {
    return item.id === projectId
  });
}