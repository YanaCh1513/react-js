const initialState = {
    showName: false,
    name: 'Default'
}

const SWITCH_NAME = 'profile/switch_name'

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_NAME:
            return {
                ...state,
                showName: !state.showName // action
            }
        default:
            return state
    }
}
