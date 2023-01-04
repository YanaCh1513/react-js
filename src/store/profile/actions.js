
const ACTION_SWITCH_NAME = 'profile/switch_name'

export const withPayLoad = (actionName, payload) => {
    return { type: actionName, payload: payload }
} 