const initialState = {
    showName: false,
    name: 'Default',
    userName: "<initial user>"
}

export const ACTION_SWITCH_NAME = 'profile/switch_name'
export const ACTION_CHANGE_NAME = "PROFILE::CHANGE_NAME";

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_SWITCH_NAME:
            return {
                ...state,
                showName: !state.showName // action
            }
        case ACTION_CHANGE_NAME:
            return {
                ...state,
                userName: action.payload
            }
        default:
            return state
    }
}
