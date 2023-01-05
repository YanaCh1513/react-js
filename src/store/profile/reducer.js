import { ACTION_SWITCH_NAME, ACTION_CHANGE_NAME } from "./actions"

const initialState = {
    showName: false,
    name: 'Default',
    userName: "Яна"
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_SWITCH_NAME:
            return {
                ...state,
                showName: !state.showName // action
            }
        case ACTION_CHANGE_NAME: {
            console.log(action)
            return {
                ...state,
                userName: action.payload
            }
        }
        default:
            return state
    }
}
