export const UPDATE_PROJECT_LIST = 'UPDATE_PROJECT_LIST'


export const updateProjectList = newSearchProjectList => ({
    type: UPDATE_PROJECT_LIST, searchedProjectList: newSearchProjectList
})