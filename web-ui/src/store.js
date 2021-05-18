import { createStore, combineReducers } from 'redux';

function projects(state = [], action) {
    switch (action.type) {
    case 'projects/set':
        return action.data;
    default:
        return state;
    }
}

function project_form(state = {}, action) {
    switch (action.type) {
    case 'project_form/set':
        return action.data;
    default:
        return state
    }
}

function root_reducer(state, action) {
    console.log("root_reducer", state, action);
    let reducer = combineReducers({
        projects, project_form
    });
    return reducer(state, action);
}

let store = createStore(root_reducer);
export default store;