import store from './store';

export async function api_get(path) {
    let text = await fetch("http://localhost:4000/api" + path, {});
    let resp = await text.json();
    return resp.data;
}

//------------------------------PROJECTS------------------------------

export function fetch_projects() {
    api_get("/projects").then((data) => store.dispatch({
        type: 'projects/set',
        data: data,
    }));
}

export function get_project(id) {
    console.log("it's being called");
    let path = "/projects/" + id
    return api_get(path);
}

//------------------------------DEFAULT------------------------------

export function load_defaults() {
    fetch_projects();
}