import { ACTION_SWITCH_NAME, ACTION_CHANGE_NAME, ACTION_MAKE_AUTH } from "./actions"

const initialState = {
    showName: false,
    name: 'Default',
    userName: "Яна",
    isAuth: false
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_MAKE_AUTH:
            return {
                ...state,
                isAuth: action.payload // isAuth
            }
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
