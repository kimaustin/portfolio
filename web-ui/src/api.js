import store from './store';

export async function api_get(path) {
    let text = await fetch("http://localhost:4000/api" + path, {});
    let resp = await text.json();
    return resp.data;
}

export function fetch_projects() {
    api_get("/projects").then((data) => store.dispatch({
        type: 'projects/set',
        data: data,
    }));
}

export function load_defaults() {
    fetch_projects();
}