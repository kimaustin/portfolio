import { createStore, combineReducers } from 'redux';

//--------------------------SESSION--------------------------
function save_session(sess) {
    let session = Object.assign({}, sess, {time: Date.now()});
    localStorage.setItem("session", JSON.stringify(session));
  }
  
  //clears the session when a user logs out
  function clear_session() {
    localStorage.removeItem("session");
  }
  
  //user session restore on page refresh (if still exists)
  function restore_session() {
    let session = localStorage.getItem("session");
    if (!session) {
      return null;
    }
    session = JSON.parse(session);
    let age = Date.now() - session.time;
    let hour = 3600000; // one hour session expiration (in milliseconds)
    if (age < hour) {
      return session;
    }
    else {
      return null;
    }
  }
  
  // user session; initial state = current session (if active)
  function session(state = restore_session(), action) {
    switch (action.type) {
      case 'session/set':
        save_session(action.data);
        return action.data;
      case 'session/clear':
        clear_session();
        return null;
      default:
        return state;
    }
  }

//--------------------------PROJECTS--------------------------

function projects(state = [], action) {
    switch (action.type) {
    case 'projects/set':
        return action.data;
    default:
        return state;
    }
}

// function project_form(state = {}, action) {
//     switch (action.type) {
//     case 'project_form/set':
//         return action.data;
//     default:
//         return state
//     }
// }

function root_reducer(state, action) {
    console.log("root_reducer", state, action);
    let reducer = combineReducers({
        projects, session
    });
    return reducer(state, action);
}

let store = createStore(root_reducer);
export default store;