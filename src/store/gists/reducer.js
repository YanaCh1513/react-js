const initialState = {
    gistList: []
}

export function gistsReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_GIST': {
            state = {
                ...state,
                gistList: [...state.gistList, ...action.gists]
            }
        }
        default:
            return state

    }
}