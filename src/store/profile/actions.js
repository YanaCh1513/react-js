
export const ACTION_SWITCH_NAME = 'profile/switch_name'
export const ACTION_CHANGE_NAME = "PROFILE::CHANGE_NAME";

export const withPayLoad = (actionName, payload) => {
    return { type: actionName, payload: payload }
}

export const changeShowName = () => withPayLoad(ACTION_SWITCH_NAME)
export const changeName = (name) => withPayLoad(ACTION_CHANGE_NAME, name)

export default {
    changeShowName,
    changeName
}

