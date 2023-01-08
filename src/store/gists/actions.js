export const GET_GISTS = 'gists/get_gists'
export const GET_GISTS_SUCCESS = 'gists/get_gists_success'
export const GET_GISTS_REQUEST = 'gists/get_gists_request'
export const GET_GISTS_FAILURE = 'gists/get_gists_failure'

const getGists = () => ({
    type: GET_GISTS
})

const getGistsRequest = () => ({
    type: GET_GISTS_REQUEST,
})

const getGistsSuccess = (data) => ({
    type: GET_GISTS_SUCCESS,
    payload: data
})

const getGistsFailure = (err) => ({
    type: GET_GISTS_FAILURE,
    payload: err
})

export const STATUSES = {
    IDLE: 0,
    REQUEST: 1,
    SUCCESS: 2,
    FAILUE: 3
}

const API_GISTS_PUBLIC = 'https://api.github.com/gists/public'
const API_GIST_PUBLIC = 'https://api.github.com/gists/{gistID}'

// const getAllGists = () => async (dispatch, getState) => {
//     const response = await fetch(API_GISTS_PUBLIC)
//     const data = await response.json()
//     dispatch(getGistsSuccess)
// }

export const getAllGists = () => async (dispatch) => {
    console.log('const getAllGists....')
    dispatch(getGistsRequest());
    try {
        const res = await fetch(API_GISTS_PUBLIC);
        if (!res.ok) {
            throw new Error(`Request failed with status ${res.status}`);
        }
        const result = await res.json();
        dispatch(getGistsSuccess(result));
    } catch (err) {
        dispatch(getGistsFailure(err.message));
    }
};
