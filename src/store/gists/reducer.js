import { GET_GISTS, GET_GISTS_FAILURE, GET_GISTS_REQUEST, GET_GISTS_SUCCESS, STATUSES } from "./actions"


const initialState = {
    gists: [],
    request: STATUSES.IDLE,
    error: null
}

export function gistsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_GISTS_REQUEST:
            return {
                ...state,
                request: STATUSES.REQUEST
            }
        case GET_GISTS_SUCCESS:
            return {
                ...state,
                request: STATUSES.SUCCESS,
                gists: action.payload
            }
        case GET_GISTS_FAILURE:
            return {
                ...state,
                request: STATUSES.FAILUE,
                error: action.payload
            }
        default:
            return state

    }
}

