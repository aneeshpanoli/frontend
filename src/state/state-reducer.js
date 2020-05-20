import { UPDATE_PROJECT_LIST } from "./state-actions";

const initialState = {
    searchedProjectList: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PROJECT_LIST:
            return {...state, searchedProjectList: action.searchedProjectList}
        default: return state
    }
};